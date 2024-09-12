export const loginRequest = JSON.stringify(
  {
    email: "user@email.com",
    password: "password",
  },
  null,
  2
);
export const loginResponse = JSON.stringify(
  {
    token: "token",
    expiresIn: 3600,
  },
  null,
  2
);

export const userResponse = JSON.stringify(
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    first_name: "John",
    last_name: "Doe",
    nickname: "johnny.doe",
    name: "John Doe",
    picture:
      "https://s.gravatar.com/avatar/abc123def456gh789ij012klmnopqrstu?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png",
    updated_at: "2024-06-03T15:00:53.517Z",
    email: "john.doe@example.com",
    email_verified: true,
    roles: [],
    tenant_reference_id: 2,
    organizations: [
      {
        organization: {
          id: "123e4567-e89b-12d3-a456-4266141745454",
          name: "Doe Inc.",
          display_name: "Doe Inc.",
          metadata: {
            tenant_id: "100",
            type: "demand-customer",
          },
        },
        roles: [
          {
            name: "Owner",
            permissions: [
              "manage:admins",
              "manage:members",
              "member:all",
              "update:payment_methods",
              "update:roles",
            ],
          },
        ],
      },
    ],
  },
  null,
  2
);

export const updateUserRequest = JSON.stringify(
  {
    name: "John Doe",
    email: "john.doe@email.com",
  },
  null,
  2
);
export const categoriesResponse = JSON.stringify(
  [
    {
      name: "NVIDIA A100",
      description: "The NVIDIA A100 description will be here.",
      badgeList: [
        {
          value: "AI",
          label: "AI",
        },
        {
          value: "Deep Learning",
          label: "Deep Learning",
        },
        {
          value: "HPC",
          label: "HPC",
        },
        {
          value: "Data Analytics",
          label: "Data Analytics",
        },
        {
          value: "Scientific Computing",
          label: "Scientific Computing",
        },
      ],
      brandImages: [
        {
          url: "https://example.com/product1",
          alt: "image alt text",
        },
      ],
      startPrice: 1.4,
      priceFrequency: "per card-hour",
      ctaButton: {
        label: "See Inventory",
        href: "/marketplace/category/a100",
      },
      hasPreorder: true,
      hasOnDemand: true,
      hasReserve: true,
      hasCluster: false,
      categorySlug: {
        value: "a100",
      },
    },
  ],
  null,
  2
);
export const commonListingResponse = {
  id: 1,
  name: "High Performance Instance",
  location: "Arizona",
  status: "on demand",
  cluster: {
    network: "10Gbps",
    nodes: 5,
  },
  specs: {
    cpu: {
      cores: 16,
      vCpus: 32,
    },
    gpu: {
      count: 4,
    },
    memory: 128,
  },
  price: {
    monthly: 1500,
    hourly: {
      per_cpu: 0.05,
      per_gpu: 0.1,
      total: 1.0,
    },
  },
};
export const listingResponse = JSON.stringify(commonListingResponse, null, 2);
export const listingAllResponse = JSON.stringify(
  [commonListingResponse],
  null,
  2
);

export const commonSshKeyResponse = {
  id: "123e4567-e89b-12d3-a456-426614174550",
  dateCreated: "2023-01-15T10:00:00Z",
  name: "Sample SSH Key",
  fingerprint: "abc123def456ghi789",
  key: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr1N8...example",
  userId: "123e4567-e89b-12d3-a456-426614174000",
};

export const sshKeyResponse = JSON.stringify(
  { ...commonSshKeyResponse, dateDeleted: null },
  null,
  2
);
export const sshKeyAllResponse = JSON.stringify(
  [{ ...commonSshKeyResponse, dateDeleted: null }],
  null,
  2
);
export const sshKeyCreateRequest = JSON.stringify(
  {
    dateDeleted: null,
    name: commonSshKeyResponse.name,
    key: commonSshKeyResponse.key,
  },
  null,
  2
);
export const sshKeyDeleteResponse = JSON.stringify(
  { ...commonSshKeyResponse, dateDeleted: "2023-01-15T10:00:00Z" },
  null,
  2
);

export const storefrontResponse = JSON.stringify(
  {
    organizationId: "123e4567-e89b-12d3-a456-426614174000",
    slug: "sample-organization",
    logoFileName: "logo.png",
    stylesFileName: "styles.css",
  },
  null,
  2
);

export const storefrontRequest = JSON.stringify(
  {
    slug: "sample-organization",
    logoFileName: "logo.png",
    stylesFileName: "styles.css",
  },
  null,
  2
);

export const commonInventoryResponse = {
  id: 1,
  name: "Sample Device",
  location: "New York, USA",
  status: {
    value: "active",
    label: "Active",
  },
  customer: {
    device_name: "Device123",
    organization_id: "123e4567-e89b-12d3-a456-426614174888",
    provisioned_date: "2023-01-15T10:00:00Z",
    ssh_pub_keys: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr1N8...example",
    ssh_pub_keys_ids: "123e4567-e89b-12d3-a456-426614176560",
    user_id: "123e4567-e89b-12d3-a456-426614174000",
  },
  dcim: {
    nickname: "NYC-Server-01",
  },
  listing: {
    is_active: true,
    is_private: null,
    is_internal: false,
    invitee: null,
    price: {
      per_month: 200.0,
      per_hour: 0.1,
      gpu_per_hour: 0.5,
    },
  },
  networking: {
    download_speed: 1000,
    ipv4: "192.168.1.1",
    ipv6: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    mac: "00:1A:2B:3C:4D:5E",
    upload_speed: 100,
  },
  specs: {
    cpu: {
      cores_per_cpu: 8,
      count: 2,
      model: "Intel Xeon E5-2670",
      threads_per_core: 2,
      threads_per_cpu: 16,
      total_cores: 16,
      total_threads: 32,
    },
    gpu: {
      count: 2,
      model: "NVIDIA Tesla V100",
    },
    memory: {
      total: 128,
    },
    storage: {
      hdd_count: 2,
      hdd_size: 2000,
      hdd_total: 4000,
      nvme_count: 1,
      nvme_size: 1000,
      nvme_total: 1000,
      ssd_count: 2,
      ssd_size: 500,
      ssd_total: 1000,
      total: 6000,
    },
  },
};
export const inventoryResponse = JSON.stringify(
  commonInventoryResponse,
  null,
  2
);
export const inventoryAllResponse = JSON.stringify(
  [commonInventoryResponse],
  null,
  2
);
export const updateInventoryRequest = JSON.stringify(
  {
    active: true,
    frequency: "Monthly",
    price: 29.99,
    invitee: "johndoe@email.com",
    prepaid: false,
  },
  null,
  2
);

export const updateNicknameRequest = JSON.stringify(
  { nickname: "device-nickname" },
  null,
  2
);

export const provisionRequest = JSON.stringify(
  {
    deploymentName: "deployment name",
    operatingSystem: "ubuntu2204",
    sshKeyIds: ["123e4567-e89b-12d3-a456-426614174000"],
  },
  null,
  2
);

export const createHypervisorRequest = JSON.stringify(
  {
    name: "Sample Network",
    site: 101,
    location: 205,
    virtualNetworkConfig: {
      ip_address: "192.168.1.10",
      gateway: "192.168.1.1",
      public_ip_address: "203.0.113.1",
    },
    gateway: "192.168.1.1",
    interface_name: "eth0",
    ip_address: "192.168.1.10",
    nameservers: ["8.8.8.8", "8.8.4.4"],
    public_ip_address: "203.0.113.1",
    tenant: 502,
  },
  null,
  2
);

export const createHypervisorResponse = JSON.stringify(
  {
    name: "Sample Network",
    id: 1,
    status: "staged",
  },
  null,
  2
);

export const commonDeploymentResponse = {
  id: 1,
  location: "New York, USA",
  status: {
    value: "active",
    label: "Active",
  },
  customer: {
    device_name: "Device123",
    organization_id: "123e4567-e89b-12d3-a456-426614174001",
    provisioned_date: "2023-01-15T10:00:00Z",
    ssh_pub_keys: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr1N8...example",
    ssh_pub_keys_ids: "123e4567-e89b-12d3-a456-426614174023",
    user_id: "123e4567-e89b-12d3-a456-426614174055",
  },
  listing: {
    is_internal: true,
    price: {
      per_month: 150.0,
      per_hour: 0.08,
      gpu_per_hour: 0.4,
    },
  },
  networking: {
    download_speed: 1000,
    ipv4: "192.168.1.1",
    ipv6: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    mac: "00:1A:2B:3C:4D:5E",
    upload_speed: 100,
  },
  specs: {
    cpu: {
      cores_per_cpu: 8,
      count: 2,
      model: "Intel Xeon E5-2670",
      threads_per_core: 2,
      threads_per_cpu: 16,
      total_cores: 16,
      total_threads: 32,
    },
    gpu: {
      count: 2,
      model: "NVIDIA A100",
    },
    memory: {
      total: 128,
    },
    storage: {
      hdd_count: 2,
      hdd_size: 2000,
      hdd_total: 4000,
      nvme_count: 1,
      nvme_size: 1000,
      nvme_total: 1000,
      ssd_count: 2,
      ssd_size: 500,
      ssd_total: 1000,
      total: 6000,
    },
  },
};

export const deploymentResponse = JSON.stringify(
  commonDeploymentResponse,
  null,
  2
);
export const deploymentAllResponse = JSON.stringify(
  [commonDeploymentResponse],
  null,
  2
);
export const updateDeploymentRequest = JSON.stringify(
  { name: "deployment-name" },
  null,
  2
);

export const marketplaceProvisionRequest = JSON.stringify(
  {
    organizationId: "123e4567-e89b-12d3-a456-426614174678",
    deploymentName: "deployment name",
    operatingSystem: "ubuntu2204",
    sshKeyIds: ["123e4567-e89b-12d3-a456-426614174000"],
  },
  null,
  2
);

export const getDefaultPaymentMethodResponse = JSON.stringify(
  {
    id: "pm_1234abcd",
    object: "payment_method",
    allow_redisplay: "unspecified",
    billing_details: {
      address: {
        city: "Quincy Township",
        country: "US",
        line1: "Generic Drive",
        line2: null,
        postal_code: "49082",
        state: "MI",
      },
      email: null,
      name: "John Doe",
      phone: "+15554443333",
    },
    card: {
      brand: "visa",
      checks: {
        address_line1_check: "pass",
        address_postal_code_check: "pass",
        cvc_check: "pass",
      },
      country: "US",
      display_brand: "visa",
      exp_month: 10,
      exp_year: 2050,
      fingerprint: "FHsSDFYHBsa",
      funding: "credit",
      generated_from: null,
      last4: "4242",
      networks: {
        available: ["visa"],
        preferred: null,
      },
      three_d_secure_usage: {
        supported: true,
      },
      wallet: null,
    },
    created: 1721141372,
    customer: "cus_DHGasdrgFF",
    livemode: false,
    metadata: {},
    type: "card",
  },
  null,
  2
);
