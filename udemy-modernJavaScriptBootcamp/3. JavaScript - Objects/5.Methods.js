let restaurant = {
    name: 'ASB',
    guestCapacity : 75,
    guestCount: 0,
    checkAvailable: function (partySize){
       return (partySize <= (this.guestCapacity-this.guestCount));
    },
    seatParty: function (seats){
        this.guestCount += seats; 
    },
    removeParty: function (seats){
        this.guestCount -= seats;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailable(5));
restaurant.removeParty(5);
console.log(restaurant.checkAvailable(4));



