import React from 'react'

export default function search() {
      return (
            <div className="search col-md-6 m-auto">
                  <div className="row">
                        <div class="dropdown">
                              <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                    Dropdown button
                              </button>
                              <div class="dropdown-menu">
                                    <a class="dropdown-item p-0" href="#"><input type="text"/></a>
                                    <a class="dropdown-item" href="#">Link 2</a>
                                    <a class="dropdown-item" href="#">Link 3</a>
                              </div>

                        </div>
                        <div className="button explore-btn">
                              <div>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                              </div>
                        </div>
                        <div  className="button search-btn">
                              <div>
                                    <i class="fa fa-search-plus"></i>Search
                              </div>
                        </div>
                  </div>
            </div>
      )
}
