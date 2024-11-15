class Travel {
    constructor(destination, startDate, endDate, budget) {
        this.destination = destination;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.budget = budget;
        this.activities = [];
    }
  
    getDuration() {
        return Math.round((this.endDate - this.startDate) / (1000 * 60 * 60 * 24));
    }
  
    addActivity(activity) {
        this.activities.push(activity);
    }
  
    getSummary() {
        return `${this.destination} trip will last ${this.getDuration()} days.`;
    }
  }
  
  export default Travel;
  
  