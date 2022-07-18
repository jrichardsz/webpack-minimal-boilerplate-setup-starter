import moment from 'moment';


class ApiMock {
  constructor() {

  }

  getData() {
    var targetServices = [];

    var today = new Date();

    for(var i=0; i < 5; i++) {

      var firstDay = new Date();
      firstDay.setDate(firstDay.getDate()-89);

      var serviceDetail = {
        label: this.randomWord(5)+".com",
        globalStatus: "Operational",
        description: this.randomWord(25)
      }

      var statusDetail = [];
      for(var j=0; j < 90; j++) {
        var dayDetail = {
          dateString: moment(firstDay).format('YYYY-MM-DD'),
          averageResponseTimeMillis: this.randomIntFromInterval(1,1000)
        }

        if(this.randomBoolean()){
          dayDetail.incidentsCount = this.randomIntFromInterval(1,20);
        }else{
          dayDetail.incidentsCount = 0;
        }

        statusDetail.push(dayDetail);
        firstDay.setDate(firstDay.getDate() + 1);
      }
      serviceDetail.statusDetail = statusDetail;
      targetServices.push(serviceDetail);
    }

    return targetServices;
  }

  randomWord(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  randomBoolean() {
    return Math.random() < 0.5;
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}

export default ApiMock;
