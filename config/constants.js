export const API_URL = "http://localhost:3000";

export const CONTRACT_COLUMNS = [
  {
    title: "Id",
    data: "id",
    sortable: false,
  },
  {
    title: "Contract",
    data: "contract",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Owner Name",
    data: "ownerName",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Age(0)",
    data: "ageO",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Annuitant Name",
    data: "annuitantName",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Age(A)",
    data: "ageA",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Issued",
    data: "issued",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Product",
    data: "product",
    sortable: true,
    hide: "sm",
  },
  {
    title: "LOB",
    data: "lob",
    sortable: true,
    hide: "sm",
  },
  {
    title: "INH",
    data: "inh",
    sortable: true,
    hide: "sm",
  },
  {
    title: "eStmt",
    data: "eStmt",
    sortable: true,
    hide: "sm",
  },
  {
    title: "CIS",
    data: "cis",
    sortable: true,
    hide: "sm",
  },
  {
    title: "eTax",
    data: "eTax",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Tel/Auth",
    data: "telAuth",
    sortable: true,
    hide: "sm",
  },
  {
    title: "Value",
    data: "value",
    sortable: true,
    hide: "sm",
  },
];

export const CONTRACT_DUMMY_DATA = {
  contract_number: "VA123456789",
  product_name: "Pacific Select Variable Annuity",
  owner: "name",
  annuitant: "name",
  rep_of_record: "name",
  issue_date: "date",
  plan_type: "Roth IRA",
  surrender_value: 45000.12,
  total_premiums_paid: 100000.23,
  withdrawal_totals: {
    ytd: 100.49,
    since_issue: 29000.98,
  },
  trades: {
    ytd: 2,
  },
  contract_value: {
    as_of_date: "date",
    total: 45000.12,
    investment_options: [
      {
        investment_option_name: "PAM Floating Rate Income",
        investment_option_manager: "Pacific Asset Management",
        allocation: {
          future: 0.1,
          current: 0.05,
        },
        value: {
          units: 15.245,
          unit_value: 24.3678954,
          balance: 371.48,
        },
      },
      {
        investment_option_name: "PAM Floating Rate Income",
        investment_option_manager: "Pacific Asset Management",
        allocation: {
          future: 0.1,
          current: 0.05,
        },
        value: {
          units: 15.245,
          unit_value: 24.3678954,
          balance: 371.48,
        },
      },
      {
        investment_option_name: "PAM Floating Rate Income",
        investment_option_manager: "Pacific Asset Management",
        allocation: {
          future: 0.1,
          current: 0.05,
        },
        value: {
          units: 15.245,
          unit_value: 24.3678954,
          balance: 371.48,
        },
      },
      {
        investment_option_name: "PAM Floating Rate Income",
        investment_option_manager: "Pacific Asset Management",
        allocation: {
          future: 0.1,
          current: 0.05,
        },
        value: {
          units: 15.245,
          unit_value: 24.3678954,
          balance: 371.48,
        },
      },
    ],
  },
};
