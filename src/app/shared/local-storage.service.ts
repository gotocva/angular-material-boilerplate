import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class LocalStorageService {

    private storage = new Subject(); 
    private password : string = '12345678';  

    watch(){
        return this.storage.asObservable();
    }

    setItem(key: string, data: any) {
        if(typeof data != 'string') data = JSON.stringify(data);
        this.storage.next(data);
        data = this.encrypt(data);
        localStorage.setItem(key, data);
    }

    getItem(key: string) {
        const data = localStorage.getItem(key);
        if (data) {
            return this.decrypt(data);
        } else {
            return false;
        }
    }

    clear() {
        this.storage.unsubscribe();
        localStorage.clear();
    }

    encrypt(text){
        return CryptoJS.AES.encrypt(text.trim(), this.password.trim()).toString();  
    }
      
    decrypt(text){
        return CryptoJS.AES.decrypt(text.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);  
    } 
}