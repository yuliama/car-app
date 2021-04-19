class ActorModel {
    constructor(id, firstName, lastName, birthday, image, imdbLink) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
    }

    age() {
        let birthYear = this.birthday.split('-')[0];
        return new Date().getFullYear() - birthYear;
    }
}

export default ActorModel;