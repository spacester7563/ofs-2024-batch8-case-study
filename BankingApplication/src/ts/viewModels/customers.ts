import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";
import "ojs/ojknockout";

class CustomersViewModel {
  readonly dataprovider: ArrayDataProvider<any, any>;

  constructor() {
    const id = sessionStorage.getItem('id');

    const customersArray = ko.observableArray<any>([]);

    if (id) {
      fetch(`http://localhost:8080/customerapi/allaccount/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          customersArray(data);
        })
        .catch(err => console.log(err));
    }

    this.dataprovider = new ArrayDataProvider(customersArray, {
      keyAttributes: "depId",
      implicitSort: [{ attribute: "depId", direction: "ascending" }],
    });
  }
}

whenDocumentReady().then(function () {
  ko.applyBindings(new CustomersViewModel(), document.getElementById("table"));
});

export = CustomersViewModel;
