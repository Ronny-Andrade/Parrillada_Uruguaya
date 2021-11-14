import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { User } from '../shared/user.interface';
import {auth} from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;
  constructor(public afAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    ); 

  }
  
  async resetPassword(email: string): Promise<void>{
    try{
      return this.afAuth.auth.sendPasswordResetEmail(email);
    }catch(error){
      console.log('Error->',error);
    }
  }
  async register(email:string, password:string): Promise<User> {
    try{
      const {user} = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    }catch(error){
      console.log('Error->', error);
    }
  }

  async login(email:string, password:string): Promise<User>{
    try{
      const {user} = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      this.updateUserData(user);
      return user;

    }catch(error){
      console.log('Error->',error);
    }
  }

  async loginGoogle(): Promise<User>{
    try{
      const {user} = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;

    }catch(error){
      console.log('Error->',error);
    }
  }

  async sendVerificationEmail(): Promise<void>{
    try{
      return (await this.afAuth.auth.currentUser).sendEmailVerification();
    }catch(error){
      console.log('Error->',error);
    }
  }

  isEmailVerified(user:User): boolean {
    return user.emailVerified===true? true : false;
  }

  async logout(): Promise<void> {
    try{
      await this.afAuth.auth.signOut();
    }catch(error){
      console.log('Error->', error);
    }
  }

  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data:User = {
      uid:user.uid,
      email: user.email,
      emailVerified:user.emailVerified,
      displayName: user.displayName,
      
    };

    return userRef.set(data, { merge:true});
  }

  getUserAuth(){
    return this.afAuth.authState;
  }
}
