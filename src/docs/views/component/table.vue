<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center">
        <div class="x-iconbox x-iconbox-lg radius-circle mr-2 border text-active hidden mr-5">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" /></svg>
        </div>

        <div class="flex-1">
          <h3>Table</h3>
          <p class="text-light font-light">Table examples</p>
        </div>
      </div>
    </div>

    <div class="py-md">
      <div class="mb-md flex">
        <div class="flex-1">
          <div class="x-card-title">Default</div>
          <table class="table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PRESET</th>
                <th>CREATED</th>
                <th>MODIFIED</th>
                <th>LABELS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-info">labels</span></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-danger">labels</span></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-warning">labels</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex-1">
          <div class="x-card-title">Table in Card</div>
          <div class="x-card">
            <table class="table table-full table-fixed table-lined">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>PRESET</th>
                  <th>CREATED</th>
                  <th>MODIFIED</th>
                  <th>LABELS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>nginx@latest</td>
                  <td>2020.05.31 00:00</td>
                  <td>2020.05.31 00:00</td>
                  <td><span class="x-label x-label-xs x-label-info">labels</span></td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>nginx@latest</td>
                  <td>2020.05.31 00:00</td>
                  <td>2020.05.31 00:00</td>
                  <td><span class="x-label x-label-xs x-label-danger">labels</span></td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>nginx@latest</td>
                  <td>2020.05.31 00:00</td>
                  <td>2020.05.31 00:00</td>
                  <td><span class="x-label x-label-xs x-label-warning">labels</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="my-md">
        <div class="x-card-title">Full width & fixed</div>
        <table class="table table-full table-fixed">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRESET</th>
              <th>CREATED</th>
              <th>MODIFIED</th>
              <th>LABELS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-info">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-danger">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-warning">labels</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-md">
        <div class="x-card-title">Lined</div>
        <table class="table table-full table-fixed table-lined">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRESET</th>
              <th>CREATED</th>
              <th>MODIFIED</th>
              <th>LABELS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-info">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-danger">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-warning">labels</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-md">
        <div class="x-card-title">with Buttons</div>
        <table class="table table-full table-fixed table-lined border">
          <thead>
            <tr>
              <th class="table-cell-em">NAME</th>
              <th>PRESET</th>
              <th>CREATED</th>
              <th>MODIFIED</th>
              <th>LABELS</th>
              <th width="200"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold">
                <a>web</a>
              </td>
              <td class="font-bold text-info">nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-info">labels</span></td>
              <td class="text-right p-2">
                <button class="btn btn-icon btn-sm btn-primary">
                  <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                      fill-rule="evenodd"
                      d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 0 0-.036-.053.86.86 0 0 0-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 0 0-.271.194.213.213 0 0 0-.036.054l-.003.01z"
                    />
                    <path d="M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM9 5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-2-2V5z" />
                  </svg>
                </button>
                <div class="x-dropdown x-dropdown-align-right">
                  <button class="btn btn-sm btn-outline btn-default">
                    <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
                      <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
                      <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Actions
                  </button>

                  <div class="x-dropdown-items">
                    <div class="x-contextmenu">
                      <div class="x-list min-w-200">
                        <div class="x-list-header">Header A</div>
                        <a class="x-list-item">
                          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                          List 1
                          <div class="tools">
                            <span class="x-badge">100</span>
                            <div class="x-caret"></div>
                          </div>
                        </a>
                        <div class="x-separator"></div>
                        <div class="x-list-header">Header B</div>
                        <a class="x-list-item">
                          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                          List 2
                          <div class="tools">
                            <div class="x-caret"></div>
                          </div>
                        </a>
                        <a class="x-list-item">
                          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                          List 3
                          <div class="tools">
                            <span class="x-badge x-badge-primary">100</span>
                          </div>
                        </a>
                        <div class="x-separator"></div>
                        <a class="x-list-item">
                          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                          List 4
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-md">
        <div class="x-card-title">with Toolbar & Pagination</div>

        <div class="border bg-panel">
          <!-- filter navbar-->
          <div class="x-navbar">
            <div class="x-navbar">
              <div class="x-inputbox mx-3">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"
                  />
                </svg>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div class="x-navbar">
              <a href="javascript:;" class="btn btn-icon">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z" />
                  <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z" />
                </svg>
              </a>
              <div class="x-dropdown x-dropdown-align-right">
                <a class="btn font-normal">
                  <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  View Type
                </a>
                <div class="x-dropdown-items">
                  <div class="x-contextmenu">
                    <div class="x-list min-w-200">
                      <div class="x-list-header">Header A</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 1
                        <div class="tools">
                          <span class="x-badge">100</span>
                          <div class="x-caret"></div>
                        </div>
                      </a>
                      <div class="x-separator"></div>
                      <div class="x-list-header">Header B</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 2
                        <div class="tools">
                          <div class="x-caret"></div>
                        </div>
                      </a>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 3
                        <div class="tools">
                          <span class="x-badge x-badge-primary">100</span>
                        </div>
                      </a>
                      <div class="x-separator"></div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 4
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="x-dropdown x-dropdown-align-right">
                <a class="btn font-normal">
                  <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Sort
                </a>
                <div class="x-dropdown-items">
                  <div class="x-contextmenu">
                    <div class="x-list min-w-200">
                      <div class="x-list-header">Header A</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 1
                        <div class="tools">
                          <span class="x-badge">100</span>
                          <div class="x-caret"></div>
                        </div>
                      </a>
                      <div class="x-separator"></div>
                      <div class="x-list-header">Header B</div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 2
                        <div class="tools">
                          <div class="x-caret"></div>
                        </div>
                      </a>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 3
                        <div class="tools">
                          <span class="x-badge x-badge-primary">100</span>
                        </div>
                      </a>
                      <div class="x-separator"></div>
                      <a class="x-list-item">
                        <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        List 4
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- // filter navbar -->
          <table class="table table-full table-fixed table-lined">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PRESET</th>
                <th>CREATED</th>
                <th>MODIFIED</th>
                <th>LABELS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-info">labels</span></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-black">labels</span></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>nginx@latest</td>
                <td>2020.05.31 00:00</td>
                <td>2020.05.31 00:00</td>
                <td><span class="x-label x-label-xs x-label-system">labels</span></td>
              </tr>
            </tbody>
          </table>
          <div class="border-t p-xs text-right">
            <div class="x-pagination">
              <a class="x-pagination-prev">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                </svg>
              </a>
              <a class="x-pagination-page selected">1</a>
              <a class="x-pagination-page">2</a>
              <a class="x-pagination-page">3</a>
              <a class="x-pagination-page">4</a>
              <a class="x-pagination-page">5</a>
              <a class="x-pagination-page">6</a>
              <a class="x-pagination-page">7</a>
              <a class="x-pagination-page">8</a>
              <a class="x-pagination-page">9</a>
              <a class="x-pagination-next">
                <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="my-md">
        <div class="x-card-title">mini</div>

        <table class="border bg-panel table table-mini">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRESET</th>
              <th>CREATED</th>
              <th>MODIFIED</th>
              <th>LABELS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-info">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-black">labels</span></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>nginx@latest</td>
              <td>2020.05.31 00:00</td>
              <td>2020.05.31 00:00</td>
              <td><span class="x-label x-label-xs x-label-system">labels</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
