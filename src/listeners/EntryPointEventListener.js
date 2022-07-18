import ejs from 'ejs/ejs.min.js';
import template from '../pages/template.html';
import ApiMock from '../api-mock/ApiMock.js';


class EntryPointEventListener {
  constructor() {

  }

  async start() {
    var apiMock = new ApiMock();
    var targetServices = apiMock.getData();
    let html = ejs.render(template, {
      targetServices: targetServices
    });
    document.getElementById("root").innerHTML = html;

    //update header
    document.dispatchEvent(new CustomEvent("simple-event", {
      'detail': {
        eventId: "TodayHeaderEvent",
        payload: targetServices
      }
    }));
  }
}

export default EntryPointEventListener;
