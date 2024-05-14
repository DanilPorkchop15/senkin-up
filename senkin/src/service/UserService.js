import {baseUrl} from "@/utils/constants.js";

export default class UserService {
  static url = baseUrl + '/users';
  static async getAll() {
    const response = await fetch(this.url);
    return await response.json();
  }
  static async auth(userData){
    const response = await fetch(this.url + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return await response.json();
  }

  static async register(userData) {
    const response = await fetch(this.url + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return await response.json();
  }
  static async delete (id) {
    const response = await fetch(this.url + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }
}