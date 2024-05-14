import {baseUrl} from "@/utils/constants.js";

export default class AnnouncementService  {
  static url = baseUrl + '/announcements';
  static async getAll() {
    const response = await fetch(this.url );
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(this.url  + '/' + id);
    return await response.json();
  }

  static async deleteById(id) {
    const response = await fetch(this.url + '/' + id, {
      method: 'DELETE'
    });
    return await response.json();
  }

  static async create(newAnnouncement) {
    const response = await fetch(this.url + '/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAnnouncement)
    });
    return await response.json();
  }
}