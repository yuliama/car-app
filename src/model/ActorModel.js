class ActorModel {
    constructor(firstName, lastName, birthday, image, imdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
    }

    age(){
        let birthYear = this.birthday;  //TODO extract birth year from the birthdate
        return new Date().getFullYear() - birthYear;
    }
}

export default ActorModel;