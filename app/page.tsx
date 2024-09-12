import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import {
  categoriesResponse,
  createHypervisorRequest,
  createHypervisorResponse,
  deploymentAllResponse,
  deploymentResponse,
  getDefaultPaymentMethodResponse,
  inventoryAllResponse,
  inventoryResponse,
  listingAllResponse,
  listingResponse,
  loginRequest,
  loginResponse,
  marketplaceProvisionRequest,
  provisionRequest,
  sshKeyAllResponse,
  sshKeyCreateRequest,
  sshKeyDeleteResponse,
  sshKeyResponse,
  storefrontRequest,
  storefrontResponse,
  updateDeploymentRequest,
  updateInventoryRequest,
  updateNicknameRequest,
  updateUserRequest,
  userResponse,
} from "./request-response-objects";

export default function Page() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brokkr API Documentation</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <div class="container">
          <input
            type="checkbox"
            id="sidebarToggle"
            class="sidebar-toggle-checkbox"
          />
          <label for="sidebarToggle" class="sidebar-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <aside class="sidebar">
            <nav>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 165 48"
                class="logo"
              >
                <g clip-path="url(#logo-mono_svg__a)">
                  <path
                    fill-rule="evenodd"
                    d="m148.462 13.352-11.361 19.59 3.539 4.006 1.388-2.48h12.914l3.072 5.51h5.9l-15.452-26.626Zm-4.401 17.475 4.401-7.93 4.442 7.93h-8.843Zm-87.31-5.91v-10.56h5.605v25.615H56.75V28.885H42.627v11.087h-5.604V31.23a49.435 49.435 0 0 0 5.323-16.872h.28v10.56H56.75Zm17.136 15.055v-11.51L62.553 14.358h6.344l7.765 9.72 7.854-9.72h6.31L79.535 28.463v11.51h-5.647Zm26.531-25.615c8.635 0 15.568 5.509 15.568 12.807s-6.933 12.808-15.568 12.808h-9.342V14.357h9.342Zm-3.737 3.923v17.76h3.362c6.103 0 10.34-3.998 10.34-8.876 0-4.879-4.237-8.884-10.299-8.884h-3.403Zm21.009 21.692h5.603l.004-9.9h2.698l8.678 9.9h6.511l-9.425-10.668c3.653-1.156 5.937-3.543 5.937-7.017 0-5.017-4.769-7.93-11.454-7.93h-8.552v25.615Zm8.554-13.685h-2.951v-8.035h2.951c3.444 0 5.77 1.44 5.77 4.035 0 2.563-2.326 4-5.77 4Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <path
                  fill-rule="evenodd"
                  d="M14.688 10.272c-.516-.559-.971-1.17-1.357-1.822-.01.726.143 1.445.446 2.107.202.458.468.887.79 1.274.4.137 1.074.381 1.753.615l2.218.783a12.553 12.553 0 0 1-1.736-1.064 13.262 13.262 0 0 1-2.114-1.893ZM10.453 12.105c-.645-.06-1.066-.07-1.066-.07s.197.225.408.478c.122.154.244.316.358.49.8-.157 3.362-.306 3.362-.306a14.71 14.71 0 0 0-3.063-.592ZM5.387 15.385s.494-.14 1.116-.293c.559-.138 1.218-.287 1.693-.352 0 0-.445-.119-1.075-.22-.717-.113-1.687-.203-2.508-.06.303.269.564.58.774.925Z"
                  clip-rule="evenodd"
                ></path>
                <path d="M25.306 12.018h-.001l.001.001v-.001ZM21.766 43.295a11.988 11.988 0 0 1-3.88-1.42 13.092 13.092 0 0 1-5.056-5.428C7.254 25.47 17.401 17.54 28.028 22.052h.018s-1.481.35-2.468 1.069c2.126-.37 4.07-.102 5.732.333 0 0 .981-2.22 1.164-2.8.183-.579-.269-1.7-.604-2.298a2.646 2.646 0 0 1-.19.829l-1.97-1.259c.486-1.874-3.425-1.804-4.417-5.914 0 .14-.082 2.128 1.14 3.085l-1.122-.617-.016-.042c-.086-.031-3.403-1.264-5.553-2.809 1.465 1.744 3.455 2.137 3.224 3.596l1.97 1.258c.108-.265.172-.545.19-.83.335.599.785 1.72.602 2.3-.182.579-1.162 2.8-1.162 2.8-1.67-.436-3.613-.703-5.732-.336.987-.721 2.467-1.067 2.467-1.067-3.71-.813-6.932-.204-9.494 1.276v-.023c-.47.287-4.757 3.099-3.136 9.606l2.425 4.177c1.075 2.19 3.794 6.144 4.897 7.22 1.985 1.947 5.116 3.894 5.116 3.894"></path>
                <path d="M26.446 15.103c-1.222-.956-1.147-2.944-1.14-3.084a3.112 3.112 0 0 0 .008 2.43l.016.042 1.116.612ZM16.342 31.198v-.032c-2.023-4.975 1.913-11.41 11.702-9.114-10.628-4.508-21.518 3.337-15.939 14.31 1.118 2.25 3.46 4.675 5.643 5.97 1.198.693 2.597 1.404 4.034.963 1.728-1.44 3.348-3 4.846-4.67a11.96 11.96 0 0 1-3.195-.477c-5.23-1.541-6.971-6.58-7.091-6.95Z"></path>
                <path
                  fill-rule="evenodd"
                  d="M0 9.58a48.14 48.14 0 0 0 5.761 21.502 49.206 49.206 0 0 0 14.879 16.78 49.22 49.22 0 0 0 14.876-16.78A48.153 48.153 0 0 0 41.278 9.58a44.562 44.562 0 0 0-13.076-4.407c3.722 1.85 7.394 4.12 10.008 6.162l-.023.351a45.283 45.283 0 0 1-5.213 17.867 46.179 46.179 0 0 1-12.003 14.385l-.322.258-.323-.258A46.181 46.181 0 0 1 8.32 29.552a45.285 45.285 0 0 1-5.215-17.87l-.023-.351a28.832 28.832 0 0 1 6.043-5.296A45.007 45.007 0 0 0 .014 9.58H0Z"
                  clip-rule="evenodd"
                ></path>
                <path d="M23.612.99s-.128 2.106 1.139 3.093l-1.12-.617v-.014C21.967 2.694 19.778 1.4 18.403.154c0 .072-.01.144-.01.216 0-.072 0-.144.01-.216 0 0 1.075 2.809 4.24 3.814l-3.004-.417s-2.637-.657-5.179.191c0 0 .99-.035 3.687.567 0 0-2.101.234-2.913.406-.086 0-3.423.136-5.54 1.444l.013.01c1.63-.35 3.861-.154 3.861-.154-.931.246-3.1 1.082-3.1 1.082v-.01c-.124.036-2.85.877-4.636 2.864a21.92 21.92 0 0 1 2.83-.974 15.75 15.75 0 0 0-1.9 1.606s-1.827 1.778-3.283 5.044l.179.454a11.35 11.35 0 0 1 1.735-.716 4.102 4.102 0 0 0-.773-.925c1.312-.811 3.093-1.17 4.279-1.327.295-.21.598-.413.904-.608l-.408-.477a8.441 8.441 0 0 1 1.916-.392 19.044 19.044 0 0 1 2.472-1.074 4.891 4.891 0 0 1-.453-2.112 16.34 16.34 0 0 0 2.167 1.615 17.06 17.06 0 0 1 2.925-.45v.013c.032-.12.074-.238.126-.35.029.111.063.22.095.327a16.65 16.65 0 0 1 7.702 1.45h.038-.023c-.16.039-1.523.385-2.451 1.064 2.126-.37 4.068-.102 5.732.334 0 0 .981-2.22 1.164-2.809.183-.588-.269-1.701-.604-2.298a2.69 2.69 0 0 1-.179.83l-1.97-1.26c.505-2.065-3.534-1.957-4.43-5.958"></path>
                <path
                  fill-rule="evenodd"
                  d="M18.392.16c0 .035-.002.071-.004.107-.002.036-.005.072-.005.108 0 .948.416 2.015.977 2.826.087.125.179.244.268.352l3.004.417c-3.161-1.01-4.24-3.81-4.24-3.81Zm6.36 3.923C23.484 3.09 23.611.99 23.611.99a2.94 2.94 0 0 0-.238 1.283c.011.406.099.806.258 1.181V3.468l1.12.615ZM5.815 9.944c.925-.387 1.876-.71 2.847-.967a15.75 15.75 0 0 0-1.9 1.606 2.448 2.448 0 0 0-.947-.639Zm7.738-3.929s-2.232-.198-3.867.153c.299.266.555.575.761.915v.01s2.175-.832 3.106-1.078Zm.896-2.268c.02 0 1.012-.03 3.686.567 0 0-2.1.234-2.912.4a9.846 9.846 0 0 0-.774-.967ZM26.603 38.738a46.06 46.06 0 0 0 6.024-8.453l-.061-.067c-4.976 7.338-14.297 5.893-16.252 1.082 0 0 1.668 5.373 7.085 6.973 1.04.302 2.119.463 3.204.477v-.012ZM18.544 9.282a3.14 3.14 0 0 0 .018 2.472l1.12.615c-1.267-.99-1.138-3.094-1.138-3.094v.007Z"
                  clip-rule="evenodd"
                ></path>
                <path d="m26.358 11.064-.004-.002h-.006c-2.585-.563-4.931-.477-6.975.083-.067-.1-.131-.204-.194-.31l-.027-.047a3.919 3.919 0 0 1-.198-.373 6.158 6.158 0 0 1-.323-.812 16.65 16.65 0 0 1 7.702 1.45l.021.01h.004v.001ZM15.497 10.062h.012c.332.212.66.407.967.586l.015.009.358.198h.01l.169.093.054.03.24.13.107.056.131.07.149.078.07.035.179.087.04.022.004.001c.055.028.105.053.155.076.096-.039.197-.074.297-.11a3.039 3.039 0 0 1-.07-.262l-.016-.086c-.01-.057-.022-.111-.029-.165l-.006-.05-.006-.045a5.64 5.64 0 0 1-.013-.151.417.417 0 0 1 0-.063V10.172c0-.033 0-.067.01-.098.006-.015.006-.03.006-.044 0-.015 0-.03.007-.046.01-.02.01-.04.011-.062V9.91l.002-.015c.003-.024.009-.048.015-.072l.005-.02a1.12 1.12 0 0 0 .01-.045l.005-.029.002-.013.022-.084v-.001l.007-.026v-.012c-.985.071-1.962.228-2.92.469ZM11.298 11.643h.002c.795-.415 1.62-.773 2.468-1.072a5.35 5.35 0 0 0 .785 1.267h-.013a11.011 11.011 0 0 0-3.24-.195l-.004.002.002-.002ZM10.162 13.002s-.517.018-1.271.118c.295-.211.598-.413.913-.608l.023.03.035.046c.098.129.203.268.3.414Z"></path>
                <defs>
                  <clipPath id="logo-mono_svg__a">
                    <path
                      fill="#fff"
                      d="M30.494 9.933h133.508v30.621H30.494z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>

              <div class="nav-section">
                <h2>Guides</h2>

                <ul>
                  <li>
                    <a href="#introduction">Introduction</a>
                  </li>

                  <li>
                    <a href="#authentication">Authentication</a>
                  </li>

                  {/* <li>
                    <a href="#errors">Device Lifecycle</a>
                  </li> */}
                </ul>
              </div>

              <div class="nav-section">
                <h2>Resources</h2>

                <ul>
                  <li>
                    <a href="#hypervisor">DCIM · Hypervisor</a>
                    <ul>
                      <li>
                        <a href="#create-hypervisor">Create hypervisor</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#inventory">DCIM · Inventory</a>
                    <ul>
                      <li>
                        <a href="#get-inventory">Get inventory</a>
                      </li>
                      <li>
                        <a href="#get-inventory-by-id">Get inventory by ID</a>
                      </li>
                      <li>
                        <a href="#update-inventory-by-id">Update inventory</a>
                      </li>
                      <li>
                        <a href="#update-nickname-by-id">Update nickname</a>
                      </li>
                      <li>
                        <a href="#provision">Provision</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#storefront">DCIM · Storefront</a>
                    <ul>
                      <li>
                        <a href="#get-storefront-by-id">Get storefront by ID</a>
                      </li>
                      <li>
                        <a href="#create-storefront">Create storefront</a>
                      </li>
                      <li>
                        <a href="#delete-storefront">Delete storefront</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#deployments">Deployments</a>
                    <ul>
                      <li href="#get-deployments">
                        <a href="#get-deployments">Get deployments</a>
                      </li>
                      <li>
                        <a href="#get-deployments-by-id">
                          Get deployment by ID
                        </a>
                      </li>
                      <li>
                        <a href="#update-deployment">Update deployment</a>
                      </li>
                      <li>
                        <a href="#reprovision">Reprovision</a>
                      </li>
                      <li>
                        <a href="#delete-deployment">Delete deployment</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#marketplace">Marketplace</a>
                    <ul>
                      <li>
                        <a href="#get-categories">Get categories</a>
                      </li>
                      <li>
                        <a href="#get-listing-by-id">Get listing by ID</a>
                      </li>
                      <li>
                        <a href="#get-all-listings">Get all listings</a>
                      </li>
                      <li>
                        <a href="#provision-marketplace">Provision</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#organization">Organization</a>
                    <ul>
                      <li>
                        <a href="#get-default-payment-method">
                          Get Default Payment Method
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#sshkeys">SSH Keys</a>
                    <ul>
                      <li>
                        <a href="#get-key-by-id">Get key by ID</a>
                      </li>
                      <li>
                        <a href="#get-all-keys">Get all keys</a>
                      </li>
                      <li>
                        <a href="#create-key">Create key</a>
                      </li>
                      <li>
                        <a href="#delete-key">Delete key</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#user">User</a>
                    <ul>
                      <li>
                        <a href="#get-user">Get user</a>
                      </li>
                      <li>
                        <a href="#update-user">Update user</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <main class="content">
            <section id="introduction">
              <h1>Brokkr API Documentation</h1>
              <p>
                Use the Brokkr API to access devices, deployments, the
                marketplace, seamlessly integrate your product into the
                workflows of the leading data center inventory management system
                and more.
              </p>
            </section>
            <section id="authentication">
              <h2>Authentication</h2>
              <p>
                To authenticate, use the login endpoint with your email and
                password to obtain an API token. Once you have the token, attach
                it as a bearer token to the headers for subsequent requests.
              </p>
              <div id="login" class="endpointDiv">
                <h3>Login</h3>
                <p>This endpoint will fetch an API token.</p>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/login</span>
                  </div>
                  <code class="json">{loginRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/login</span>
                  </div>
                  <code class="json">{loginResponse}</code>
                </div>
              </div>
            </section>

            <section id="hypervisor">
              <h2>Hypervisor</h2>
              <p>These endpoints allow you to create a hypervisor device.</p>
              <div id="create-hypervisor" class="endpointDiv">
                <h3>Create Hypervisor</h3>
                <p>
                  This endpoint allows you to create a Hypervisor device for
                  your data center. There are <strong>requirements</strong>{" "}
                  listed below that must be satisfied before creating your
                  Hypervisor device.
                </p>
                <div class="requirements">
                  <h3>Requirements</h3>
                  <div>
                    <ul className="text-sm font-medium list-disc list-inside">
                      <li>Install Ubuntu 22.04</li>
                      <li>IOMMU enabled in BIOS</li>
                      <li>Enable virtualization in BIOS</li>
                      <li>Created site and location</li>
                      <li>Public IP for hypervisor</li>
                      <li>Public IP for virtual machine</li>
                    </ul>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/hypervisors</span>
                  </div>
                  <code class="json">{createHypervisorRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>

                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/hypervisors</span>
                  </div>
                  <code class="json">{createHypervisorResponse}</code>
                </div>
              </div>
            </section>
            <section id="inventory">
              <h2>Inventory</h2>
              <p>
                These endpoints allow you to retrieve, update and provision
                inventory.
              </p>
              <div id="get-inventory" class="endpointDiv">
                <h3>Get Inventory</h3>
                <p>
                  This endpoint allows you to retrieve all inventory listings.
                </p>
                <div class="parameters">
                  <h4>Optional Query Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>Filter inventory by organization ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/dcim/inventory/baremetal</span>
                  </div>

                  <code class="json">{inventoryAllResponse}</code>
                </div>
              </div>
              <div id="get-inventory-by-id" class="endpointDiv">
                <h3>Get Inventory by ID</h3>
                <p>
                  This endpoint allows you to retrieve inventory listing by ID.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Retrieve inventory by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/dcim/inventory/baremetal/:id</span>
                  </div>
                  <code class="json">{inventoryResponse}</code>
                </div>
              </div>
              <div id="update-inventory-by-id" class="endpointDiv">
                <h3>Update Inventory by ID</h3>
                <p>This endpoint allows you to update an inventory listing.</p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Update inventory by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/listing
                    </span>
                  </div>
                  <code class="json">{updateInventoryRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/listing
                    </span>
                  </div>
                  <code class="json">{inventoryResponse}</code>
                </div>
              </div>
              <div id="update-nickname-by-id" class="endpointDiv">
                <h3>Update Nickname by ID</h3>
                <p>
                  This endpoint allows you to update an inventory listing's
                  nickname.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Update inventory nickname by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/nickname
                    </span>
                  </div>

                  <code class="json">{updateNicknameRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/nickname
                    </span>
                  </div>
                  <code class="json">{inventoryResponse}</code>
                </div>
              </div>
              <div id="provision" class="endpointDiv">
                <h3>Provision</h3>
                <p>
                  This endpoint allows you to provision a listing from your
                  organizations inventory.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Provision inventory by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/provision
                    </span>
                  </div>

                  <code class="json">{provisionRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/dcim/inventory/baremetal/:id/provision
                    </span>
                  </div>
                  <code class="json">{inventoryResponse}</code>
                </div>
              </div>
            </section>
            <section id="storefront">
              <h2>Storefront</h2>
              <p>
                These endpoints allow you to create, delete and retrieve
                storefront settings by an organization ID.
              </p>
              <div id="get-storefront-by-id" class="endpointDiv">
                <h3>Get Storefront by Organization ID</h3>
                <p>
                  This endpoint allows you to retrieve storefront settings by an
                  organization ID.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>Retrieve settings by organization ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/storefront/:organizationId</span>
                  </div>
                  <code class="json">{storefrontResponse}</code>
                </div>
              </div>
              <div id="create-storefront" class="endpointDiv">
                <h3>Create Storefront</h3>
                <p>
                  This endpoint allows you to create a storefront for your
                  organization.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>Create storefront with organization ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/storefront/:organizationId</span>
                  </div>
                  <code class="json">{storefrontRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/storefront/:organizationId</span>
                  </div>
                  <code class="json">{storefrontResponse}</code>
                </div>
              </div>
              <div id="delete-storefront" class="endpointDiv">
                <h3>Delete Storefront</h3>
                <p>
                  This endpoint allows you to delete a storefront from your
                  organization.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>Delete storefront with organization ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">DELETE</span>
                    <span class="path">/api/storefront/:organizationId</span>
                  </div>
                  <code class="json">{storefrontResponse}</code>
                </div>
              </div>
            </section>
            <section id="deployments">
              <h2>Deployments</h2>
              <p>
                These endpoints allow you to retrieve, update and reprovision
                deployments.
              </p>
              <div id="get-deployments" class="endpointDiv">
                <h3>Get Deployments</h3>
                <p>This endpoint allows you to retrieve all deployments.</p>
                <div class="parameters">
                  <h4>Optional Query Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>Filter deployments by organization ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/deployments</span>
                  </div>

                  <code class="json">{deploymentAllResponse}</code>
                </div>
              </div>
              <div id="get-deployments-by-id" class="endpointDiv">
                <h3>Get Deployment by ID</h3>
                <p>This endpoint allows you to retrieve a deployment by ID.</p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Retrieve deployment by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/deployments/:id</span>
                  </div>
                  <code class="json">{deploymentResponse}</code>
                </div>
              </div>
              <div id="update-deployment" class="endpointDiv">
                <h3>Update Deployment by ID</h3>
                <p>This endpoint allows you to update a deployment.</p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Update deployment by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/deployment/:id</span>
                  </div>
                  <code class="json">{updateDeploymentRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/deployment/:id</span>
                  </div>
                  <code class="json">{deploymentResponse}</code>
                </div>
              </div>
              <div id="reprovision" class="endpointDiv">
                <h3>Reprovision</h3>
                <p>This endpoint allows you to reprovision a deployment.</p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Reprovision Deployment by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/deployments/:id/reprovision</span>
                  </div>

                  <code class="json">{provisionRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/deployments/:id/reprovision</span>
                  </div>
                  <code class="json">{deploymentResponse}</code>
                </div>
              </div>
              <div id="delete-deployment" class="endpointDiv">
                <h3>Delete Deployment</h3>
                <p>This endpoint allows you to delete a deployment.</p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Reprovision Deployment by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">DELETE</span>
                    <span class="path">/api/deployments/:id</span>
                  </div>
                  <code class="json">{deploymentResponse}</code>
                </div>
              </div>
            </section>
            <section id="marketplace">
              <h2>Marketplace</h2>
              <p>
                These endpoints allow you to retrieve the marketplace listings
                and categories.
              </p>
              <div id="get-categories" class="endpointDiv">
                <h3>Get categories</h3>
                <p>
                  This endpoint allows you to retrieve all of the marketplace
                  categories.
                </p>
                <div class="data">
                  <div class="header">Response</div>

                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/marketplace/categories</span>
                  </div>
                  <code class="json">{categoriesResponse}</code>
                </div>
              </div>
              <div id="get-listing-by-id" class="endpointDiv">
                <h3>Get listing by ID</h3>
                <p>
                  This endpoint allows you to retrieve a single marketplace
                  listing.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Retrieve device by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/marketplace/listings/:id</span>
                  </div>
                  <code class="json">{listingResponse}</code>
                </div>
              </div>
              <div id="get-all-listings" class="endpointDiv">
                <h3>Get all listings</h3>
                <p>
                  This endpoint allows you to retrieve all of the marketplace
                  listings in a category.
                </p>
                <div class="parameters">
                  <h4>Required Query Parameters</h4>
                  <div>
                    <div>
                      <p>category</p>
                      <p>
                        "4090" | "3090" | "a100" | "a40" | "a5000" | "a6000" |
                        "gh200" | "h100" | "mi250" | "mi300x"
                      </p>
                    </div>
                    <small>Filter by device category</small>
                  </div>
                </div>
                <div class="parameters">
                  <h4>Optional Query Parameters</h4>
                  <div>
                    <div>
                      <p>status</p>
                      <p>"on demand" | "reserve" | "preorder"</p>
                    </div>
                    <small>Filter by device status</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/marketplace/listings</span>
                  </div>
                  <code class="json">{listingAllResponse}</code>
                </div>
              </div>
              <div id="provision-marketplace" class="endpointDiv">
                <h3>Provision</h3>
                <p>
                  This endpoint allows you to provision a marketplace listing.
                </p>
                <p>
                  Your organization <strong>must</strong> have a default payment
                  set.
                </p>
                <p>
                  Device must have a status of <strong>"on demand"</strong>. If
                  it is a pre-order device, placing down payments via the API is
                  not yet supported. Please contact Hydra sales at
                  Sales@hydrahost.com for pre-order help.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Provision marketplace listing by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/marketplace/listings/baremetal/:id/provision
                    </span>
                  </div>

                  <code class="json">{marketplaceProvisionRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">
                      /api/marketplace/listings/baremetal/:id/provision
                    </span>
                  </div>
                  <code class="json">{inventoryResponse}</code>
                </div>
              </div>
            </section>
            <section id="organization">
              <h2>Organization</h2>
              <p>
                These endpoints will allow you to retrieve data relating to your
                organization.
              </p>
              <div id="get-default-payment-method" class="endpointDiv">
                <h3>Get Default Payment Method</h3>
                <p>
                  This endpoint will fetch your organizations default payment
                  method
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>organizationId</p>
                      <p>string</p>
                    </div>
                    <small>
                      Retrieve default payment method by organization ID
                    </small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">
                      /api/organizations/:organizationId/default-payment-method
                    </span>
                  </div>
                  <code class="json">{getDefaultPaymentMethodResponse}</code>
                </div>
              </div>
            </section>
            <section id="sshkeys">
              <h2>SSH Keys</h2>
              <p>
                These endpoints allow you to retrieve, create and delete SSH
                keys.
              </p>
              <div id="get-key-by-id" class="endpointDiv">
                <h3>Get key by ID</h3>
                <p>
                  This endpoint allows you to retrieve a user's SSH key by ID.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Retrieve an SSH key by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/sshkeys/:id</span>
                  </div>
                  <code class="json">{sshKeyResponse}</code>
                </div>
              </div>
              <div id="get-all-keys" class="endpointDiv">
                <h3>Get all SSH keys</h3>
                <p>
                  This endpoint allows you to retrieve all of a users SSH keys.
                </p>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/sshkeys</span>
                  </div>
                  <code class="json">{sshKeyAllResponse}</code>
                </div>
              </div>
              <div id="create-key" class="endpointDiv">
                <h3>Create SSH key</h3>
                <p>This endpoint allows you to add an SSH key to a user.</p>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/sshkeys/create</span>
                  </div>
                  <code class="json">{sshKeyCreateRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">POST</span>
                    <span class="path">/api/sshkeys/create</span>
                  </div>
                  <code class="json">{sshKeyResponse}</code>
                </div>
              </div>
              <div id="delete-key" class="endpointDiv">
                <h3>Delete SSH key</h3>
                <p>
                  This endpoint allows you to delete an SSH key from a user.
                </p>
                <div class="parameters">
                  <h4>Required Path Parameters</h4>
                  <div>
                    <div>
                      <p>id</p>
                      <p>string</p>
                    </div>
                    <small>Delete an SSH key by ID</small>
                  </div>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">DELETE</span>
                    <span class="path">/api/sshkeys/:id</span>
                  </div>
                  <code class="json">{sshKeyDeleteResponse}</code>
                </div>
              </div>
            </section>
            <section id="user">
              <h2>User</h2>
              <p>
                These endpoints will allow you to retrieve and modify your user
                record.
              </p>
              <div id="get-user" class="endpointDiv">
                <h3>Get User</h3>
                <p>This endpoint will fetch your user record.</p>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">GET</span>
                    <span class="path">/api/user</span>
                  </div>
                  <code class="json">{userResponse}</code>
                </div>
              </div>
              <div id="update-user" class="endpointDiv">
                <h3>Update User</h3>
                <p>
                  This endpoint allows you to update your name and/or email.
                </p>
                <div class="data">
                  <div class="header">Request</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/user</span>
                  </div>
                  <code class="json">{updateUserRequest}</code>
                </div>
                <div class="data">
                  <div class="header">Response</div>
                  <div class="url">
                    <span class="method">PATCH</span>
                    <span class="path">/api/user</span>
                  </div>
                  <code class="json">{userResponse}</code>
                </div>
              </div>
            </section>
          </main>
        </div>
      </body>

      <style>{styles}</style>
    </html>
  );

  return <p>test</p>;
}

const styles = `
body, html {
    background-color: #1F1931;
    color: #fff;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Space Mono, sans-serif;
}


.container {
    display: flex;
    height: 100vh;
}

.logo {
	height: 52px;
	width: 180px;
	padding-top: 15px;
	padding-bottom: 30px;
	display: block;
	margin: 0 auto;
}
  
.sidebar {
    width: 275px;
    color: #fff;
    overflow-y: auto;
    position: fixed;
    height: 100%;
    border-right: 1px solid rgba(184, 192, 255, 0.30);
	background-color: #1F1931;
	transition: transform 0.3s ease;
}

.sidebar-toggle-checkbox {
	display: none;
}
  
.sidebar-toggle {
	display: none;
	position: fixed;
	top:10px;
	left: 10px;
	z-index: 1000;
	color: white;
	border: none;
	font-size: 24px;
	cursor: pointer;
	
}

.sidebar-toggle-checkbox:checked ~ .sidebar {
	transform: translateX(0);
}

.sidebar-toggle span {
	display: block;
	width: 24px;
	height: 3px;
	margin: 5px auto;
	background-color: white;
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar-toggle-checkbox:checked + .sidebar-toggle span:nth-child(1) {
	transform: rotate(45deg) translate(6px, 6px);
}
  
.sidebar-toggle-checkbox:checked + .sidebar-toggle span:nth-child(2) {
	opacity: 0;
}
  
.sidebar-toggle-checkbox:checked + .sidebar-toggle span:nth-child(3) {
	transform: rotate(-45deg) translate(5px, -5px);
}
  
.sidebar-toggle-checkbox:checked + .sidebar-toggle + .sidebar {
	transform: translateX(0);
}

.sidebar-toggle:hover {
	color: #5A32FE;
}

.sidebar .nav-section {
  padding: 15px 30px;
}

.sidebar .nav-section h2 {
  font-size: .8rem;
  font-weight: 600;
}

.sidebar nav ul li {
    border-left: 1px solid rgba(184, 192, 255, 0.30);
}

.sidebar nav ul li ul li {
    border-left: none;
}

.sidebar nav ul {
    list-style-type: none;
    margin-left: 10px;
    padding: 0;
}

.sidebar nav ul li {
	padding: 10px 0px 10px 10px;
  }
  
.sidebar nav ul li a {
	  color: #fff;
	  text-decoration: none;
	  display: block;
}
  
.sidebar nav ul li a:hover {
	  color: #5A32FE;
}

.parameters {
  display:flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom:0;
}

.parameters div div {
  display: flex;
  gap: 1rem;
}

.parameters p:nth-of-type(1) {
  font-weight: 600;
  margin: 0
}

.parameters div p:nth-of-type(2) {
  color:#A5ABE5;
  margin: 0
}

.parameters small {
  color:#9CA3AF
}

.requirements {
	display:flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom:0;
	color:#97FFF8;
  }

.requirements h3{
	text-decoration: underline;
  }

.content {
    margin-left: 275px;
    padding: 0 30px;
    overflow-y: auto;
    height: 100vh;
    box-sizing: border-box;
}

.content section {
  padding: 15px 0;
}

section h2 {
  color: #5A32FE;
}

code {
    display: block;
    background-color: #2E2A46;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    overflow-x: auto; 
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
	  padding: 0.5rem;
  	white-space: pre;
}

.data {
    background-color: #2E2A46;
    border: 1px solid rgba(184, 192, 255, 0.30);
    border-radius: 20px;
    margin-top: 20px;
}

.data .header {
  background-color: #1F1931;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 20px;
}

.data .url {
  background-color: #363250;
  padding: 5px 20px;
  display: flex;
  gap: .6rem;
  align-items: center;
}

.data .url .method {
  color: #5A32FE;
  font-weight: 600;
}

.data .url .path {
  color: #A5ABE5;
  font-size: .8rem;
}

.endpointDiv {
	margin-top: 3rem;
}

@media (max-width: 768px) {
	.sidebar {
	  position: absolute;
	  transform: translateX(-275px);
	}
  
	.sidebar-toggle {
	  display: block;
	}
  
	.content {
	  margin-left: 1rem;
	}
  }
`;
