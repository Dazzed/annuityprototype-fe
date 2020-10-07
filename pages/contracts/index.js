import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/table";
import Criteria from "./components/criteria";
import Head from 'next/head'


export default function Contracts() {
  let [contracts, setContracts] = useState([]);
  let [showCriteria, setShowCriteria] = useState(false);

  const loadRecords = async (params) => {
    try {
      const result = await axios.get(`http://localhost:3000/contracts`, {
        params,
      });
      setContracts(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const applyFilter = (filters) => {
    loadRecords(filters);
  };

  const toggleShowCriteria = () => {
    setShowCriteria(!showCriteria);
  };

  return (
    <div className="container-fluid h-100 pl-3 pl-lg-0">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="row h-100">
        {/* <div className="col-md-12">
          <div className="header-section" />
        </div> */}
        <div className="col-lg-2 col-md-12 pr-0 order-second">
          <Criteria
            applyFilter={applyFilter}
            showCriteria={showCriteria}
          // toggleShowCriteria={toggleShowCriteria}
          />
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 col-12 common-mr-pd">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-8 col-8">
              <div className="contract-title-name">
                <h2>Welcome, <span>Allen</span></h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 co-sm-4 col-4">
              <div className="btn-setting ">
                <button className="btn-color-common">Settings</button>
              </div>
            </div>
          </div>
          <div className="row common-pd">
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src="/imgs/svg-imgs/search-icon.svg" id="icon" class="search" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="fliter-issue">
                <button><img src="/imgs/svg-imgs/filter-icon.svg" className="fliter-icon-1"
                  alt="Fliter Icon" /><span className="filter-component">Present</span>
                                Filters<img src="/imgs/svg-imgs/fliter-icon-2.svg" alt="Fliter Icon"
                    className="fliter-icon-2" />
                </button>
                <button>
                  <img src="/imgs/svg-imgs/sort-icon.svg" alt="Sort Icon" />Sort by: <span>Issue Date</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row common-pd">
            <div className="col-md-12">
              {/* {contracts.length > 0 ? <Table contracts={contracts} /> : null} */}
              <table class="table table-responsive-md">
                <thead>
                  <tr class="box-none">
                    <th scope="col">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" width="20" height="20">
                          <polyline points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                      <img src="/imgs/svg-imgs/dropdown-grey.svg" class="dropdwon-grey"
                        alt="dropdown Icon" />
                    </th>
                    <th scope="col">Contract<img src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon" /></th>
                    <th scope="col">Owner Name<img src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon" /></th>
                    <th scope="col">Age<img src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon" /></th>
                    <th scope="col">Product<img src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon" /></th>
                    <th scope="col">Value<img src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon" /> <button class="add-btn">+</button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" width="20" height="20">
                          <polyline points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                    </td>
                    <td>VA123456789</td>
                    <td>Doe, John C</td>
                    <td>90</td>
                    <td>Pacific Select</td>
                    <td>$52,000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" width="20" height="20">
                          <polyline points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                    </td>
                    <td>VA123456789</td>
                    <td>Doe, John C</td>
                    <td>90</td>
                    <td>Pacific Select</td>
                    <td>$52,000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" widd="20" height="20">
                          <polyline points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                    </td>
                    <td>VA123456789</td>
                    <td>Doe, John C</td>
                    <td>90</td>
                    <td>Pacific Select</td>
                    <td>$52,000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" width="20" height="20">d <polyline
                          points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                    </td>
                    <td>VA123456789</td>
                    <td>Doe, John C</td>
                    <td>90</td>
                    <td>Pacific Select</td>
                    <td>$52,000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" />
                        <svg class="checkbox__check" width="20" height="20">d <polyline
                          points="15 6 10 14 5 11"></polyline>
                        </svg>
                      </label>
                    </td>
                    <td>VA123456789</td>
                    <td>Doe, John C</td>
                    <td>90</td>
                    <td>Pacific Select</td>
                    <td>$52,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
