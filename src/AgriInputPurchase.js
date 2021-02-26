import React, {useState , Component }   from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-accessible-accordion/dist/fancy-example.css';
// import {data} from './data';
import Modal from './components/modal.js';
import { Button, NavItem} from 'react-bootstrap';
import CartIcon from './images/image2.jpg';
import person from './images/person.jpg';
import { CSVLink} from "react-csv";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class AgriInputPurchase extends Component{
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);

    this.state = {
      requiredItem: 0,
      data : [
        {
        "name": "ABGUY435324_2342",
        "person": "Alex Lee",
        "excelName": "RFQLIST_231",
        "tabdata": [{
            "id": "1",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "2",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "3",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "4",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "5",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "6",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          }
      
        ]
      },
      {
        "name": "ABGUY435324_8732",
        "person": "Alex Lee",
        "excelName": "RFQLIST_232",
        "tabdata": [{
          "id": "1",
          "category": "Seeds/Seedlings",
          "image": "b",
          "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
          "quantity": "3"
        },
        {
          "id": "2",
          "category": "Nutrients/Fertilizer",
          "image": "bs",
          "des": "Pro Nature 100% Organic Flax Seeds, 500g",
          "quantity": "33"
        },
        {
          "id": "3",
          "category": "Seeds/Seedlings",
          "image": "b",
          "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
          "quantity": "3"
        },
        {
          "id": "4",
          "category": "Nutrients/Fertilizer",
          "image": "bs",
          "des": "Pro Nature 100% Organic Flax Seeds, 500g",
          "quantity": "33"
        },
        {
          "id": "5",
          "category": "Seeds/Seedlings",
          "image": "b",
          "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
          "quantity": "3"
        },
        {
          "id": "6",
          "category": "Nutrients/Fertilizer",
          "image": "bs",
          "des": "Pro Nature 100% Organic Flax Seeds, 500g",
          "quantity": "33"
        }
      
      ]
      },
      {
        "name": "ABGUY435324_4234",
        "person": "Alex Lee",
        "excelName": "RFQLIST_233",
        "tabdata": [{
            "id": "1",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "2",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "3",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "4",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "5",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "6",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          }
      
        ]
      },
      {
        "name": "ABGUY435324_4532",
        "person": "Alex Lee",
        "excelName": "RFQLIST_236",
        "tabdata": [{
            "id": "1",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "2",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "3",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "4",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          },
          {
            "id": "5",
            "category": "Seeds/Seedlings",
            "image": "b",
            "des": "Del Monte Raw Flax Seeds Pouch, 250 g",
            "quantity": "3"
          },
          {
            "id": "6",
            "category": "Nutrients/Fertilizer",
            "image": "bs",
            "des": "Pro Nature 100% Organic Flax Seeds, 500g",
            "quantity": "33"
          }
      
        ]
      }
      
      ]
    }

    const headers = [
      { label: "Id", key: "Id" },
      { label: "Category", key: "Category" },
      { label: "Image", key: "Image" },
      { label: "Description", key: "Description" },
      { label: "Quantity", key: "Quantity" }
    ];

  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  render() {
    const data = this.state.data.map((item, index) => {
          return (
          <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="d-flex row col-12">
                    <span className="col-4 border-right1">{item.name}</span>
                    <span className="col-4 text-center border-right1 row">
                      <div className="col-4">
                          <img src={person} style={{height:'40px',width:'50px',borderRadius:"50%"}} />
                      </div>
                      <div className="col-8">
                        <span>{item.person}</span><br/>
                        <span className="text-muted">Mon,13 April,10:42 am</span>
                      </div>

                    </span>
                    <CSVLink data={item.tabdata} filename={item.excelName + ".csv"} className="col-4 excelbutton">
                      <svg className="col-3 mr-3 text-left" width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2977 11.9922L6.65002 10.4688V21.7258C6.65013 21.8481 6.67432 21.9692 6.72121 22.0821C6.7681 22.195 6.83679 22.2976 6.92333 22.384C7.00988 22.4704 7.1126 22.539 7.22562 22.5857C7.33865 22.6324 7.45976 22.6564 7.58206 22.6563H22.5039C22.6264 22.6566 22.7476 22.6327 22.8608 22.5861C22.974 22.5395 23.077 22.471 23.1637 22.3846C23.2504 22.2982 23.3192 22.1955 23.3662 22.0825C23.4132 21.9694 23.4374 21.8482 23.4375 21.7258V17.5781L15.2977 11.9922Z" fill="#185C37"/>
                        <path d="M15.2977 2.34375H7.58206C7.45976 2.34365 7.33865 2.36763 7.22562 2.41434C7.1126 2.46104 7.00988 2.52955 6.92333 2.61595C6.83679 2.70236 6.7681 2.80496 6.72121 2.9179C6.67432 3.03085 6.65013 3.15193 6.65002 3.27422V7.42187L15.2977 12.5L19.8766 14.0234L23.4375 12.5V7.42187L15.2977 2.34375Z" fill="#21A366"/>
                        <path d="M6.65002 7.42188H15.2977V12.5H6.65002V7.42188Z" fill="#107C41"/>
                        <path opacity="0.1" d="M12.8391 6.40625H6.65002V19.1016H12.8391C13.0857 19.1003 13.3219 19.002 13.4965 18.8278C13.6711 18.6537 13.7701 18.4177 13.7719 18.1711V7.33672C13.7701 7.09011 13.6711 6.85416 13.4965 6.67999C13.3219 6.50583 13.0857 6.40748 12.8391 6.40625V6.40625Z" fill="black"/>
                        <path opacity="0.2" d="M12.3305 6.91406H6.65002V19.6094H12.3305C12.5771 19.6081 12.8133 19.5098 12.9879 19.3356C13.1625 19.1615 13.2615 18.9255 13.2633 18.6789V7.84453C13.2615 7.59792 13.1625 7.36197 12.9879 7.18781C12.8133 7.01364 12.5771 6.91529 12.3305 6.91406V6.91406Z" fill="black"/>
                        <path opacity="0.2" d="M12.3305 6.91406H6.65002V18.5937H12.3305C12.5771 18.5925 12.8133 18.4942 12.9879 18.32C13.1625 18.1458 13.2615 17.9099 13.2633 17.6633V7.84453C13.2615 7.59792 13.1625 7.36197 12.9879 7.18781C12.8133 7.01364 12.5771 6.91529 12.3305 6.91406V6.91406Z" fill="black"/>
                        <path opacity="0.2" d="M11.8219 6.91406H6.65002V18.5937H11.8219C12.0685 18.5925 12.3047 18.4942 12.4793 18.32C12.6539 18.1458 12.7529 17.9099 12.7547 17.6633V7.84453C12.7529 7.59792 12.6539 7.36197 12.4793 7.18781C12.3047 7.01364 12.0685 6.91529 11.8219 6.91406V6.91406Z" fill="black"/>
                        <path d="M2.49531 6.91406H11.8219C12.0689 6.91386 12.306 7.01175 12.4809 7.18622C12.6558 7.36069 12.7543 7.59748 12.7547 7.84453V17.1555C12.7543 17.4025 12.6558 17.6393 12.4809 17.8138C12.306 17.9883 12.0689 18.0861 11.8219 18.0859H2.49531C2.37295 18.0861 2.25175 18.0622 2.13864 18.0156C2.02553 17.9689 1.92272 17.9004 1.83609 17.814C1.74946 17.7276 1.6807 17.625 1.63376 17.512C1.58682 17.399 1.5626 17.2778 1.5625 17.1555V7.84453C1.5626 7.72217 1.58682 7.60103 1.63376 7.48804C1.6807 7.37504 1.74946 7.2724 1.83609 7.18599C1.92272 7.09958 2.02553 7.03109 2.13864 6.98443C2.25175 6.93777 2.37295 6.91386 2.49531 6.91406V6.91406Z" fill="url(#paint0_linear)"/>
                        <path d="M4.45312 15.5258L6.41484 12.4914L4.61797 9.47424H6.06094L7.04141 11.4063C7.13203 11.5891 7.19766 11.725 7.22734 11.8156H7.24062C7.30469 11.6688 7.37266 11.5274 7.44375 11.3891L8.49219 9.47737H9.82031L7.97734 12.4774L9.86719 15.5281H8.45391L7.32109 13.4102C7.2685 13.3191 7.2238 13.2237 7.1875 13.125H7.16875C7.13572 13.2212 7.09168 13.3132 7.0375 13.3992L5.87109 15.5258H4.45312Z" fill="white"/>
                        <path d="M22.5046 2.34375H15.2976V7.42188H23.4375V3.27422C23.4373 3.15186 23.4131 3.03072 23.3662 2.91772C23.3192 2.80473 23.2505 2.70209 23.1639 2.61568C23.0772 2.52927 22.9744 2.46077 22.8613 2.41411C22.7482 2.36746 22.627 2.34355 22.5046 2.34375V2.34375Z" fill="#33C481"/>
                        <path d="M15.2976 12.5H23.4375V17.5781H15.2976V12.5Z" fill="#107C41"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="3.51094" y1="6.18281" x2="10.8062" y2="18.8172" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18884F"/>
                        <stop offset="0.5" stopColor="#117E43"/>
                        <stop offset="1" stopColor="#0B6631"/>
                        </linearGradient>
                        </defs>
                      </svg>
                      <span className="col-5 pr-5 text-center">{item.excelName}</span>

                      <span className="col-3 pl-3 text-right">
                        <svg width="30" height="30" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5 17.6667L18.5 12.1111M13.5 17.6667V1V17.6667ZM13.5 17.6667L8.5 12.1111L13.5 17.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 20.4445L1.77625 23.8958C1.91144 24.4968 2.22353 25.0303 2.66291 25.4115C3.1023 25.7928 3.64376 25.9999 4.20125 26H22.7987C23.3562 25.9999 23.8977 25.7928 24.3371 25.4115C24.7765 25.0303 25.0886 24.4968 25.2237 23.8958L26 20.4445" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </CSVLink>
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Agri-Input Category</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Order Quantity</th>
                  </tr>
                </thead>
                <tbody>
                {item.tabdata.map((tabledata,index)=>
                  <tr>
                    <th scope="row" key={index}>{tabledata.id}</th>
                    <td>{tabledata.category}</td>
                    <td><img src={CartIcon} style={{width:'30px',height:'30px'}} /> </td>
                    <td>{tabledata.des}</td>
                    <td>{tabledata.quantity}</td>
                    <td>
                    <Button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.replaceModalItem(index)}>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5356 3.03573C10.5356 2.84629 10.6108 2.66461 10.7448 2.53065C10.8788 2.3967 11.0604 2.32144 11.2499 2.32144H16.9642C17.1536 2.32144 17.3353 2.3967 17.4692 2.53065C17.6032 2.66461 17.6784 2.84629 17.6784 3.03573V8.75001C17.6784 8.93945 17.6032 9.12113 17.4692 9.25509C17.3353 9.38904 17.1536 9.4643 16.9642 9.4643C16.7747 9.4643 16.593 9.38904 16.4591 9.25509C16.3251 9.12113 16.2499 8.93945 16.2499 8.75001V4.76001L9.79059 11.2193C9.65587 11.3494 9.47544 11.4214 9.28816 11.4198C9.10087 11.4182 8.92172 11.343 8.78929 11.2106C8.65685 11.0782 8.58173 10.899 8.58011 10.7117C8.57848 10.5244 8.65047 10.344 8.78059 10.2093L15.2399 3.75001H11.2499C11.0604 3.75001 10.8788 3.67476 10.7448 3.5408C10.6108 3.40685 10.5356 3.22517 10.5356 3.03573Z" fill="black"/>
                        <path d="M6.60707 5.00001C6.03875 5.00001 5.49371 5.22578 5.09184 5.62764C4.68998 6.0295 4.46422 6.57455 4.46422 7.14287V13.5714C4.46422 14.1398 4.68998 14.6848 5.09184 15.0867C5.49371 15.4885 6.03875 15.7143 6.60707 15.7143H12.8571C13.4254 15.7143 13.9704 15.4885 14.3723 15.0867C14.7742 14.6848 14.9999 14.1398 14.9999 13.5714V11.4286C14.9999 11.2391 15.0752 11.0575 15.2091 10.9235C15.3431 10.7896 15.5248 10.7143 15.7142 10.7143C15.9037 10.7143 16.0853 10.7896 16.2193 10.9235C16.3532 11.0575 16.4285 11.2391 16.4285 11.4286V13.5714C16.4285 14.0404 16.3361 14.5049 16.1566 14.9382C15.9772 15.3715 15.7141 15.7652 15.3825 16.0968C15.0508 16.4285 14.6571 16.6915 14.2238 16.871C13.7905 17.0505 13.3261 17.1429 12.8571 17.1429H6.60707C5.65987 17.1429 4.75146 16.7666 4.08169 16.0968C3.41192 15.427 3.03564 14.5186 3.03564 13.5714V7.14287C3.03564 6.19567 3.41192 5.28726 4.08169 4.61749C4.75146 3.94772 5.65987 3.57144 6.60707 3.57144H8.57136C8.7608 3.57144 8.94248 3.6467 9.07644 3.78065C9.21039 3.91461 9.28564 4.09629 9.28564 4.28573C9.28564 4.47517 9.21039 4.65685 9.07644 4.7908C8.94248 4.92476 8.7608 5.00001 8.57136 5.00001H6.60707Z" fill="black"/>
                    </svg>
                    </Button>
                    </td>
                  </tr>
                      
                )}
                </tbody>
              </table>
              </AccordionItemPanel>
          </AccordionItem>

          )
      });
        
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.data[requiredItem];
    return (
      <div className="body-section">
       <Tabs>
      <TabList>
        <Tab>Pending</Tab>
        <Tab>Executing</Tab>
        <Tab>Executed</Tab>
        <Tab>Completed</Tab>
      </TabList>

      <TabPanel>
      <div className="text-center">
        <button type="button" className="btn btn-secondary m-2">Undo Batch</button>
        <button type="button" className="btn btn-secondary m-2">Assign Suppliers</button>
        <button type="button" className="btn btn-secondary m-2">Generate PO</button>
      </div>
      <div>
        <h6 style={{fontWeight:700,borderBottom:'1px solid grey'}}>
          Executing Agri-Input Orders
        </h6>

        <Accordion>{data}
        <Modal
          id={modalData.id}
          category={modalData.category}
          des={modalData.des}
          quantity={modalData.quantity}
        />
        </Accordion>

      </div>
      </TabPanel>
      <TabPanel>
        <h2>Executing</h2>
      </TabPanel>
      <TabPanel>
        <h2>Executed</h2>
      </TabPanel>
      <TabPanel>
        <h2>Completed</h2>
      </TabPanel>
    </Tabs>
      </div>
    );
  }

}


export default AgriInputPurchase;