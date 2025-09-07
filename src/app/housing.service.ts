import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
	providedIn: "root",
})
export class HousingService {
	// protected housingLocationList: HousingLocation[] = [];
  url = 'http://localhost:3000/locations';
	constructor() {}

	async getAllHousingLocations(): Promise<HousingLocation[]> {
		// return this.housingLocationList;
    const response = await fetch(this.url);
    return await response.json() ?? [];
	}

	async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
		// return this.housingLocationList.find((location) => location.id === id);
    // const locations = await this.getAllHousingLocations();
    // return locations.find(location => location.id === id);
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
	}

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log("Application submitted:");
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
  }
}
