import _ from "lodash";
import dayjs from "dayjs";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);
const fakers = {
  fakeResponseTime() {
    const responses = [
      {
        id: 1,
        amount: 11000,
        Action: "Approved",
        ActionTaker: this.fakeStaff()[0].name,
        department: this.fakeDepartments()[0].name,
        ResponseTime: "0 hour(s)",
      },
      {
        id: 2,
        amount: 14000,
        Action: "Approved",
        ActionTaker: this.fakeStaff()[0].name,
        department: this.fakeDepartments()[0].name,
        ResponseTime: "3 hour(s)",
      },
      {
        id: 3,
        amount: 12000,
        Action: "Approved",
        ActionTaker: this.fakeStaff()[0].name,
        department: this.fakeDepartments()[0].name,
        ResponseTime: "1 hour(s)",
      },
      {
        id: 4,
        amount: 21000,
        Action: "Approved",
        ActionTaker: this.fakeStaff()[0].name,
        department: this.fakeDepartments()[0].name,
        ResponseTime: "2 hour(s)",
      },
    ];
    return _.shuffle(responses);
  },

  fakeExpenseReport() {
    const reports = [
      {
        initiator: "",
        primaryDepartment: "",
        expenseHead: "Accessories",
        paymentType: "Transfer",
        amountPaidOut: 40000,
        description: "description of Build Road",
        DBO: "",
        HOD: "",
        HOB: "",
        DG: "",
        date: "18-Feb-2022 11:21:39",
      },
      {
        initiator: "",
        primaryDepartment: "",
        expenseHead: "Housing",
        paymentType: "Transfer",
        amountPaidOut: 140000,
        description: "description of Housing",
        DBO: "",
        HOD: "",
        HOB: "",
        DG: "",
        date: "19-Feb-2022 11:21:39",
      },
      {
        initiator: "",
        primaryDepartment: "",
        expenseHead: "Miscellenous",
        paymentType: "Transfer",
        amountPaidOut: 540000,
        description: "description of Miscellenous",
        DBO: "",
        HOD: "",
        HOB: "",
        DG: "",
        date: "29-Feb-2022 11:21:39",
      },
    ].map((v) => ({
      ...v,
      initiator: this.fakeStaff()[0].name,
      primaryDepartment: this.fakeDepartments()[0].name,
      DBO: this.fakeStaff()[0].name,
      HOD: this.fakeStaff()[0].name,
      HOB: this.fakeStaff()[0].name,
      DG: this.fakeStaff()[0].name,
    }));

    return _.shuffle(reports);
  },
  fakeAuditLogs() {
    const audits = [
      {
        id: 1,
        model: "budget",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/budget",
        user: "Christian",
        oldValue: { status: "inactive" },
        newValue: { status: "active" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
      {
        id: 2,
        model: "expense",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/expense",
        user: "Donchi",
        oldValue: { status: "inactive" },
        newValue: { status: "active" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
      {
        id: 3,
        model: "budget",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/budget",
        user: "Chisom",
        oldValue: { email: "chisom@gmail.com" },
        newValue: { email: "chisom@1@gmail.com" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
      {
        id: 4,
        model: "budget",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/budget",
        user: "Chisom",
        oldValue: { email: "chisom@gmail.com" },
        newValue: { email: "chisom@1@gmail.com" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
      {
        id: 5,
        model: "budget",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/budget",
        user: "Chisom",
        oldValue: { email: "chisom@gmail.com" },
        newValue: { email: "chisom@1@gmail.com" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
      {
        id: 6,
        model: "budget",
        ipAddress: "172.31.22.388",
        url: "https://notn.ng/budget",
        user: "Chisom",
        oldValue: { email: "chisom@gmail.com" },
        newValue: { email: "chisom@1@gmail.com" },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
        createdAt: "February 17th 2022, 2:14:54 pm",
      },
    ];
    return audits.map((audit) => {
      return {
        id: audit.id,
        model: audit.model,
        ipAddress: audit.ipAddress,
        user: audit.user,
        url: audit.url,
        email: `${audit.user}(${_.toLower(
          _.replace(audit.user, / /g, "") + "@notn.com"
        )})`,
        oldValue: audit.oldValue,
        newValue: audit.newValue,
        userAgent: audit.userAgent,
        createdAt: audit.createdAt,
      };
    });
  },

  fakeStaff() {
    const staffData = [
      {
        id: 1,
        name: "Donchi Chisom",
        email: "chisom@gmail.com",
        phone: "07065114740",
        avatar: imageAssets["/src/assets/images/profile-1.jpg"].default,
        department: "",
        role: "",
      },
      {
        id: 2,
        name: "John Pacino",
        email: "john@gmail.com",
        phone: "07065114741",
        avatar: imageAssets["/src/assets/images/profile-1.jpg"].default,
        department: "",
        role: "",
      },
      {
        id: 3,
        name: "Ebere Chinedu",
        email: "Ebere@gmail.com",
        phone: "07065114742",
        avatar: imageAssets["/src/assets/images/profile-1.jpg"].default,
        department: "",
        role: "",
      },
      {
        id: 4,
        name: "Kevin Spacey",
        email: "Kevin@gmail.com",
        phone: "07065114743",
        avatar: "",
        department: "",
        role: "",
      },
      {
        id: 5,
        name: "Angelina Jolie",
        email: "Angelina@gmail.com",
        phone: "070651147404",
        avatar: "",
        department: "",
        role: "",
      },
      {
        id: 6,
        name: "Tom Cruise",
        email: "Tom@gmail.com",
        phone: "07065114745",
        avatar: "07065114740",
        department: "",
        role: "",
      },
      {
        id: 7,
        name: "John Travolta",
        email: "Travolta@gmail.com",
        phone: "07065114746",
        avatar: "",
        department: "",
        role: "",
      },
      {
        id: 9,
        name: "Sylvester Stallone",
        email: "Sylvester@gmail.com",
        phone: "07065114747",
        avatar: "",
        department: "",
        role: "",
      },
      {
        id: 10,
        name: "Kate Winslet",
        email: "Kate@gmail.com",
        phone: "07065114748",
        avatar: "07065114740",
        department: "",
        role: "",
      },
    ];

    return _.sampleSize(staffData).map((staff) => {
      return {
        id: staff.id,
        name: staff.name,
        email: _.toLower(_.replace(staff.name, / /g, "") + "@notn.com"),
        phone: staff.phone,
        avatar:
          imageAssets["/src/assets/images/profile-" + staff.id + ".jpg"]
            .default,
        department: this.fakeDepartments()[0].name,
        role: this.fakeRoles()[0].name,
        status: this.fakeTrueFalse()[0],
      };
    });
  },

  fakeDepartments() {
    const departments = [
      { name: "Policy Research / Analysis Advocacy", id: 1 },
      { name: "Free Trade Agreements", id: 2 },
      { name: "Trade in Services", id: 2 },
      { name: "TRIPS / Rules", id: 3 },
      { name: "TRIPS / Rules", id: 4 },
      { name: "Finance", id: 5 },
    ].map((v) => ({ ...v, status: this.fakeTrueFalse()[0] }));

    return _.shuffle(departments);
  },

  fakeRoles() {
    const roles = [
      { id: 1, name: "Departmental Budget Officer", description: "role description " },
      { id: 2, name: "Head of Department", description: "role description" },
      { id: 2, name: "Finance Officer", description: "role description" },
      { id: 3, name: "Head Of Budget", description: "role description" },
      { id: 4, name: "Director General", description: "role description" },
    ].map((v) => ({ ...v, status: this.fakeTrueFalse()[0] }));
    return _.shuffle(roles);
  },

  fakeWorkflows() {
    return [
      {
        name: "Expense",
        flow: "Departmental Budget Officer -> HOD -> Head Of Budget -> DG",
      },
      {
        name: "Budget",
        flow: "HOD -> Finance Officer -> Head Of Budget -> DG",
      },
    ];
  },
  fakeUsers() {
    const users = [
      { name: "Johnny Depp", gender: "male" },
      { name: "Al Pacino", gender: "male" },
      { name: "Robert De Niro", gender: "male" },
      { name: "Kevin Spacey", gender: "male" },
      { name: "Denzel Washington", gender: "male" },
      { name: "Russell Crowe", gender: "male" },
      { name: "Brad Pitt", gender: "male" },
      { name: "Angelina Jolie", gender: "female" },
      { name: "Leonardo DiCaprio", gender: "male" },
      { name: "Tom Cruise", gender: "male" },
      { name: "John Travolta", gender: "male" },
      { name: "Arnold Schwarzenegger", gender: "male" },
      { name: "Sylvester Stallone", gender: "male" },
      { name: "Kate Winslet", gender: "female" },
      { name: "Christian Bale", gender: "male" },
      { name: "Morgan Freeman", gender: "male" },
      { name: "Keanu Reeves", gender: "male" },
      { name: "Nicolas Cage", gender: "male" },
      { name: "Hugh Jackman", gender: "male" },
      { name: "Edward Norton", gender: "male" },
      { name: "Bruce Willis", gender: "male" },
      { name: "Tom Hanks", gender: "male" },
      { name: "Charlize Theron", gender: "female" },
      { name: "Will Smith", gender: "male" },
      { name: "Sean Connery", gender: "male" },
      { name: "Keira Knightley", gender: "female" },
      { name: "Vin Diesel", gender: "male" },
      { name: "Matt Damon", gender: "male" },
      { name: "Richard Gere", gender: "male" },
      { name: "Catherine Zeta-Jones", gender: "female" },
    ];

    const departments = [
      "Policy Research / Analysis Advocacy",
      "Free Trade Agreements",
      "Trade in Goods",
      "Trade in Services",
      "TRIPS / Rules",
      "Adminstrative Department",
      "Finance",
    ];

    const roles = [
      "Departmental Budget Officer",
      "HOD",
      "Finance Officer",
      "Head Of Budget",
      "DG",
    ];

    const workflows = [
      "Departmental Budget Officer -> HOD -> Head Of Budget -> DG",
      "HOD -> Finance Officer -> Head Of Budget -> DG",
    ];

    return _.sampleSize(users, 3).map((user) => {
      return {
        name: user.name,
        gender: user.gender,
        email: _.toLower(_.replace(user.name, / /g, "") + "@left4code.com"),
      };
    });
  },
  fakePhotos() {
    const photos = [];
    for (let i = 0; i < 15; i++) {
      photos[photos.length] =
        imageAssets[
          "/src/assets/images/profile-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(photos, 10);
  },
  fakeImages() {
    const images = [];
    for (let i = 0; i < 15; i++) {
      images[images.length] =
        imageAssets[
          "/src/assets/images/profile-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(images, 10);
  },
  fakeDates() {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      dates[dates.length] = dayjs
        .unix(_.random(1586584776897, 1672333200000) / 1000)
        .format("DD MMMM YYYY");
    }
    return _.sampleSize(dates, 3);
  },
  fakeTimes() {
    const times = [
      "01:10 PM",
      "05:09 AM",
      "06:05 AM",
      "03:20 PM",
      "04:50 AM",
      "07:00 PM",
    ];
    return _.sampleSize(times, 3);
  },
  fakeFormattedTimes() {
    const times = [
      _.random(10, 60) + " seconds ago",
      _.random(10, 60) + " minutes ago",
      _.random(10, 24) + " hours ago",
      _.random(10, 20) + " days ago",
      _.random(10, 12) + " months ago",
    ];
    return _.sampleSize(times, 3);
  },
  fakeTotals() {
    return _.shuffle([_.random(20, 220), _.random(20, 120), _.random(20, 50)]);
  },
  fakeTrueFalse() {
    return _.sampleSize([0, 1, 1], 1);
  },
  fakeStocks() {
    return _.shuffle([_.random(50, 220), _.random(50, 120), _.random(50, 50)]);
  },
  fakeProducts() {
    const products = [
      { name: "Dell XPS 13", category: "PC & Laptop" },
      { name: "Apple MacBook Pro 13", category: "PC & Laptop" },
      { name: "Oppo Find X2 Pro", category: "Smartphone & Tablet" },
      { name: "Samsung Galaxy S20 Ultra", category: "Smartphone & Tablet" },
      { name: "Sony Master Series A9G", category: "Electronic" },
      { name: "Samsung Q90 QLED TV", category: "Electronic" },
      { name: "Nike Air Max 270", category: "Sport & Outdoor" },
      { name: "Nike Tanjun", category: "Sport & Outdoor" },
      { name: "Nikon Z6", category: "Photography" },
      { name: "Sony A7 III", category: "Photography" },
    ];
    return _.shuffle(products);
  },
  fakeNews() {
    const news = [
      {
        title: "New Expense Created",
        superShortContent: _.truncate(
          "New expense request submitted by Christian",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate("New expense request submitted by Christian", {
          length: 150,
          omission: "",
        }),
        content: "New expense request submitted by Christian",
      },
      {
        title: "New Budget Created",
        superShortContent: _.truncate(
          "A budget creation request is awaiting your approval",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "A budget creation request is awaiting your approval",
          {
            length: 150,
            omission: "",
          }
        ),
        content: "A budget creation request is awaiting your approval",
      },
      {
        title: "You have a pending expense approval",
        superShortContent: _.truncate(
          "You have a new expense approval pushed to your queue",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "You have a new expense approval pushed to your queue",
          {
            length: 150,
            omission: "",
          }
        ),
        content: "You have a new expense approval pushed to your queue",
      },
      {
        title: "Christian submitted a budget for approval",
        superShortContent: _.truncate(
          "Reminder: Christians expense request is pending your approval.",
          {
            length: 50,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "Reminder: Christians expense request is pending your approval.",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "Reminder: Christians expense request is pending your approval.",
      },
    ];
    return _.shuffle(news);
  },
  fakeFiles() {
    const files = [
      { fileName: "Celine Dion - Ashes.mp4", type: "MP4", size: "20 MB" },
      { fileName: "Laravel 7", type: "Empty Folder", size: "120 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.2 MB" },
      { fileName: "Repository", type: "Folder", size: "20 KB" },
      { fileName: "Resources.txt", type: "TXT", size: "2.2 MB" },
      { fileName: "Routes.php", type: "PHP", size: "1 KB" },
      { fileName: "Dota 2", type: "Folder", size: "112 GB" },
      { fileName: "Documentation", type: "Empty Folder", size: "4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1 MB" },
    ];
    return _.shuffle(files);
  },
  fakeJobs() {
    const jobs = [
      "Frontend Engineer",
      "Software Engineer",
      "Backend Engineer",
      "DevOps Engineer",
    ];
    return _.shuffle(jobs);
  },
  fakeNotificationCount() {
    return _.random(1, 7);
  },
  fakeFoods() {
    const foods = [];
    return _.shuffle(foods);
  },
  fakeBudgetCategory() {
    const budgetCategory = [
      "OVERHEAD COST",
      "LOCAL TRAVEL & TRANSPORT: TRAINING",
      "LOCAL TRAVEL & TRANSPORT: OTHERS",
      "INTERNATIONAL TRAVEL & TRANSPORT: TRAINING",
      "INTERNATIONAL TRAVEL & TRANSPORT: OTHERS",
      "ELECTRICITY CHARGES",
      "TELEPHONE CHARGES",
      "INTERNET ACCESS CHARGES",
      "SATELLITE BROADCASTING ACCESS CHARGES",
      "WATER RATES",
      "SEWERAGE CHARGES",
      "LEASED COMMUNICATION LINES(S)",
      "OFFICE STATIONERIES / COMPUTER CONSUMABLES",
      "BOOKS",
      "NEWSPAPERS",
      "MAGAZINES & PERIODICALS",
      "PRINTING OF NON SECURITY DOCUMENTS",
      "PRINTING OF SECURITY DOCUMENTS",
      "DRUGS & MEDICAL SUPPLIES",
      "FIELD & CAMPING MATERIALS SUPPLIES",
      "UNIFORMS & OTHER CLOTHING",
      "TEACHING AIDS / INSTRUCTION MATERIALS",
      "FOOD STUFF / CATERING MATERIALS SUPPLIES",
      "MAINTENANCE OF MOTOR VEHICLE / TRANSPORT EQUIPMENT",
      "MAINTENANCE OF OFFICE FURNITURE ",
      "MAINTENANCE OF OFFICE BUILDING / RESIDENTIAL QTRS",
      "MAINTENANCE OF OFFICE / IT EQUIPMENTS",
      "MAINTENANCE OF PLANTS/GENERATORS",
      "OTHER MAINTENANCE SERVICES",
      "MAINTENANCE OF AIRCRAFTS",
      "MAINTENANCE OF SEA BOATS",
      "MAINTENANCE OF RAILWAY EQUIPMENTS",
      "LOCAL TRAINING ",
      "INTERNATIONAL  TRAINING ",
      "SECURITY SERVICES",
      "OFFICE RENT",
      "RESIDENTIAL RENT",
      "SECURITY VOTE (INCLUDING OPERATIONS)",
      "CLEANING & FUMIGATION SERVICES",
      "FINANCIAL CONSULTING",
      "INFORMATION TECHNOLOGY CONSULTING",
      "LEGAL SERVICES",
      "ENGINEERING SERVICES",
      "ARCHITECTURAL SERVICES",
      "SURVEYING SERVICES",
      "MOTOR VEHICLE  FUEL COST",
      "OTHER TRANSPORT EQUIPMENT FUEL COST",
      "PLANT / GENERATOR FUEL COST",
      "AIRCRAFT FUEL COST",
      "SEA BOAT FUEL COST",
      "COOKING GAS/FUEL COST",
      "BANK CHARGES (OTHER THAN INTEREST)",
      "INSURANCE PREMIUM",
      "LOSS ON FOREIGN EXCHANGE",
      "OTHER  CRF BANK CHARGES",
      "REFRESHMENT & MEALS",
      "HONORARIUM & SITTING ALLOWANCE",
      "PUBLICITY & ADVERTISEMENTS",
      "MEDICAL EXPENSES",
      "FOREIGN SERVICE SCHOOL FEES PAYMENT",
      "POSTAGES & COURIER SERVICES",
      "WELFARE PACKAGES",
      "SUBSCRIPTION TO PROFESSIONAL BODIES",
      "SPORTING ACTIVITIES",
      "DIRECT TEACHING & LABORATORY COST",
      "MOTOR VEHICLE ADVANCES",
      "MOTOR CYCLE ADVANCES",
      "BICYCLE ADVANCES",
      "REFURBISHING ADVANCES",
      "CORRESPONDENCE ADVANCES",
      "SPETACLE ADVANCES",
      "PROJECT MONITORING ACTIVITIES & FOLLOW UP",
      "PROMOTION, RECRUITMENT & APPOINTMENT",
      "MAINTENANCE OF ROADS AND BRIDGES",
      "CURRICULUM DEVELOPMENT",
      "NIPSS/ NATIONAL DEFENCE COLLEGE PARTICIPANTS TOUR ALLOWANCE",
      "CORPS MEMBERS KITTING, TRANSPORT AND FEEDING ALLOWANCE",
      "BUDGET PREPARATION",
      "INSPECTORATE",
      "RECRUITMENT AND APPOINTMENT (SERVICE WIDE)",
      "DISCIPLINE AND APPEALS (SERVICE WIDE)",
      "PROMOTION (SERVICE WIDE)",
      "ANNUAL BUDGET EXPENSES AND ADMINISTRATION",
      "GRANT TO STATE GOVERNMENTS - CURRENT",
      "GRANT TO STATE GOVERNMENTS - CAPITAL",
      "GRANT TO LOCAL GOVERNMENTS -CURRENT ",
      "GRANT TO LOCAL GOVERNMENTS - CAPITAL",
      "GRANTS TO GOVERNMENT OWNED COMPANIES - CURRENT",
      "GRANT TO GOVERMENT OWNED COMPANIES - CAPITAL",
      "GRANT TO PRIVATE COMPANIES - CURRENT",
      "GRANT TO PRIVATE COMPANIES - CAPITAL",
      "GRANT TO FOREIGN GOVERNMENTS",
      "GRANT TO FOREIGN INTERNATIONAL ORGANIZATIONS",
      "SUBSIDY TO GOVERNMENT OWNED COMPANIES",
      "MEAL SUBSIDY TO GOVERNMENT SCHOOLS",
      "SUBSIDY TO PRIVATE COMPANIES",
    ];
    return _.shuffle(budgetCategory);
  },
  fakeBudgetTable() {
    const budgetTable = [
      {
        id: 1, year: 2022, department: "Finance", budget_category: "Refurbishing Advances", budget_amount: 4000000, created_at: 'Aug 2, 2022 2:39:58 AM', budget_balance: 150000, status: "approved", type: "capex", quantity: 7, approved_level: [{
          user: 'John doe', role: 'H.O.D', status: 'approved'
        }, {
          user: 'John doe', role: 'Finance Officer', status: 'approved'
        }, {
          user: 'John doe', role: 'Head of budget', status: 'approved'
        }, {
          user: 'John doe', role: 'D.G', status: 'approved'
        }
        ]
      },
      {
        id: 2, year: 2022, department: "Policy & Research", budget_category: "Subsidy To Private Companies", budget_amount: 140000, created_at: 'Mar 2, 2022 2:39:58 AM', budget_balance: 65000, status: "rejected", type: "opex", quantity: 4, approved_level: [{
          user: 'Mart doe', role: 'H.O.D', status: 'approved'
        }, {
          user: 'John doe', role: 'Finance Officer', status: 'approved'
        }, {
          user: 'John doe', role: 'Head of budget', status: 'rejected'
        }
        ]
      },
      {
        id: 3, year: 2022, department: "Trade in Service", budget_category: "Grant To Foreign Governments", budget_amount: 900000, created_at: 'Feb 2, 2022 2:39:58 PM', budget_balance: 15000, status: "pending", type: "capex", quantity: 1, approved_level: [{
          user: 'John doe', role: 'H.O.D', status: 'approved'
        }, {
          user: 'John doe', role: 'Finance Officer', status: 'approved'
        }, {
          user: 'John doe', role: 'Head of budget', status: 'approved'
        }, {
          user: 'John doe', role: 'D.G', status: 'pending'
        }
        ]
      },
      {
        id: 4, year: 2021, department: "Free Trade Agreement", budget_category: "Grant To Local Governments - Capital", budget_amount: 95000000, created_at: 'Feb 2, 2022 2:39:58 AM', budget_balance: 500000, status: "approved", type: "opex", quantity: 2, approved_level: [{
          user: 'John doe', role: 'H.O.D', status: 'approved'
        }, {
          user: 'John doe', role: 'Finance Officer', status: 'approved'
        }, {
          user: 'John doe', role: 'Head of budget', status: 'approved'
        }, {
          user: 'John doe', role: 'D.G', status: 'approved'
        }
        ]
      },
      {
        id: 5, year: 2022, department: "Adminstrative Department", budget_category: "Promotion (Service Wide)", budget_amount: 30000, created_at: 'Feb 2, 2022 2:39:58 AM', budget_balance: 5000, status: "pending", type: "capex", quantity: 1, approved_level: [{
          user: 'John doe', role: 'H.O.D', status: 'approved'
        }, {
          user: 'John doe', role: 'Finance Officer', status: 'pending'
        }
        ]
      },
      {
        id: 6, year: 2022, department: "Trade in Service", budget_category: "Budget Preparation", budget_amount: 78000, created_at: 'Feb 2, 2022 2:39:58 AM', budget_balance: 50000, status: "pending", type: "capex", quantity: 1, approved_level: [{
          user: 'John doe', role: 'H.O.D', status: 'pending'
        }
        ]
      },
    ];
    return _.shuffle(budgetTable);
  },
  fakeExpenseTable() {
    const expenseTable = [
      {
        id: 1, initiator: 'John Doe',  title: 'Expense Title', expense_head: "Refurbishing Advances", beneficiary: "John Doe", expense_amount: 7000000, status: "approved", created_at: 'Feb 2, 2022 2:39:58 AM', department: 'FInance', beneficiary_account_number: "0293846352", expense_balance: 150000, description: 'lorem ipsum methr ethnor irean', type: 'individual', expense_receipt: 'receipt.png', beneficiary_bank: 'GT Bank', other_department: [
          {department_name: 'Policy Research', amount: 70000},
          {department_name: 'Adminstrative', amount: 35000}
        ],  approved_level: [
          { user: 'John doe', role: 'Departmental Budget Officer', status: 'approved', approved_at: 'Feb 2, 2022 2:39:58 AM'},
          { user: 'John doe', role: 'H.O.D', status: 'approved', approved_at: 'Feb 2, 2018 2:39:58 AM'}, 
          { user: 'John doe', role: 'Head of budget', status: 'approved', approved_at: 'Feb 2, 2021 2:39:58 AM'}, 
          { user: 'John doe', role: 'D.G', status: 'approved', approved_at: 'Jan 5, 2019 2:39:58 AM'}
        ]
      },
      {
        id: 2, initiator: 'John Doe',  title: 'Expense Title', expense_head: "Refurbishing Advances", beneficiary: "John Doe", expense_amount: 11000000, status: "pending", created_at: 'Dec 2, 2022 2:39:58 AM', department: 'Trade in Services', beneficiary_account_number: "0293846352", expense_balance: 15000, description: 'lorem ipsum methr ethnor irean', type: 'individual', expense_receipt: 'receipt.png', beneficiary_bank: 'Access Bank', other_department: [
          {department_name: 'Policy Research', amount: 50000},
          {department_name: 'Finance', amount: 30000}
        ],  approved_level: [
          {user: 'John doe', role: 'Departmental Budget Officer', status: 'approved', approved_at: 'Aug 2, 2019 2:39:58 AM'}, 
          {user: 'John doe', role: 'H.O.D', status: 'approved', approved_at: 'Aug 24, 2019 2:39:58 AM'},
          {user: 'John doe', role: 'Head of budget', status: 'pending', approved_at: 'Feb 2, 2020 2:39:58 AM'}, 
        ]
      },
      {
        id: 3, initiator: 'John Doe',  title: 'Expense Title', expense_head: "Refurbishing Advances", beneficiary: "John Doe", expense_amount: 4900000, status: "rejected", created_at: 'Jun 2, 2022 3:39:58 AM', department: 'Policy Research', beneficiary_account_number: "0293846352", expense_balance: 15000, description: 'lorem ipsum methr ethnor irean', type: 'individual', expense_receipt: 'receipt.png', beneficiary_bank: 'First Bank', other_department: [
          {department_name: 'Policy Research', amount: 30000}
        ],  approved_level: [
          {user: 'John doe', role: 'Departmental Budget Officer', status: 'approved', approved_at: 'Feb 2, 2022 2:39:58 AM'}, 
          {user: 'John doe', role: 'H.O.D', status: 'approved', approved_at: 'Feb 2, 2022 2:39:58 AM'}, 
          {user: 'John doe', role: 'Head of budget', status: 'rejected', approved_at: 'Feb 2, 2022 2:39:58 AM'}
        ]
      },
      
    ];
    return _.shuffle(expenseTable);
  },
};

const fakerData = [];
for (let i = 0; i < 20; i++) {
  fakerData[fakerData.length] = {
    users: fakers.fakeUsers(),
    photos: fakers.fakePhotos(),
    images: fakers.fakeImages(),
    dates: fakers.fakeDates(),
    times: fakers.fakeTimes(),
    formattedTimes: fakers.fakeFormattedTimes(),
    totals: fakers.fakeTotals(),
    trueFalse: fakers.fakeTrueFalse(),
    stocks: fakers.fakeStocks(),
    products: fakers.fakeProducts(),
    news: fakers.fakeNews(),
    files: fakers.fakeFiles(),
    jobs: fakers.fakeJobs(),
    notificationCount: fakers.fakeNotificationCount(),
    foods: fakers.fakeFoods(),
    staffs: fakers.fakeStaff(),
    departments: fakers.fakeDepartments(),
    roles: fakers.fakeRoles(),
    workflow: fakers.fakeWorkflows(),
    budgetCategory: fakers.fakeBudgetCategory(),
    audits: fakers.fakeAuditLogs(),
    expenseReports: fakers.fakeExpenseReport(),
    responseTime: fakers.fakeResponseTime(),
    budgetTable: fakers.fakeBudgetTable(),
    expenseTable: fakers.fakeExpenseTable(),
  };
}

const install = (app) => {
  app.config.globalProperties.$f = () => {
    return fakerData;
  };
};

export { install as default, fakerData as faker };
