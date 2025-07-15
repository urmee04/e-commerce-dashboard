### Lab 6.2: Promises and Error Handling Challenge

#### Overview

This project simulates an e-commerce dashboard that fetches product catalogs, reviews, and sales reports from mock APIs. The focus of this lab is to handle asynchronous operations using Promises in TypeScript, implement custom error classes, and manage potential API failures gracefully.

---

#### Objectives

By completing this lab, we will:

- Apply Promises to manage multiple asynchronous operations in JavaScript.
- Chain Promises to handle sequential API calls.
- Use `.catch()` and `.finally()` for error handling and cleanup.
- Create custom error classes (`NetworkError` and `DataError`) for better debugging.

---

#### Project Structure

```
e-commerce-dashboard/
├── src/
│   ├── apiSimulator.ts         # Contains API simulation functions and custom error class
│   └── index.ts                # Main application logic: fetching data, handling errors
├── tsconfig.json               # TypeScript compiler configuration
├── package.json                # npm project metadata and dependencies
└── README.md                   # Project overview and instructions

```

---

#### How to Clone and Run the Project

---

**Clone the Repository**

```bash
git clone https://github.com/urmee04/e-commerce-dashboard.git
cd e-commerce-dashboard
```

**Install Dependencies**

```bash
npm install
```

**Compile TypeScript**

```bash
npx tsc
```

**Run the Compiled Code**

```bash
node index.js
```

---

#### Critical Thinking Questions

**Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?**

Handling errors at the level of each individual API call allows for more precise control over the flow of the application. When an error occurs in a specific API call, such as fetching reviews for one product, handling it locally means the rest of the application—like displaying other products or continuing to the sales report—can still function. This ensures that a single point of failure does not cause the entire process to break. Moreover, it allows to display more meaningful error messages, such as “Failed to fetch reviews for Product ID 2,” rather than a generic failure message. If we handle all errors only at the end of the chain, we risk masking the source of the error and halting the entire user experience unnecessarily. Therefore, local error handling makes our application more resilient, user-friendly, and easier to debug.

**How does using custom error classes improve debugging and error identification?**

Custom error classes such as NetworkError and DataError provide semantic clarity and make it easier to identify and categorize different kinds of failures in the application. Rather than relying on generic error messages or types, custom classes give each error a specific identity, which can be caught and handled differently depending on its nature. For example, a NetworkError might indicate a temporary connectivity issue, while a DataError might suggest that the server returned malformed or incomplete data. This distinction enables developers to take more appropriate corrective action, such as retrying a network request or alerting developers about a backend issue. Additionally, custom error classes maintain meaningful stack traces and improve log readability, making debugging much more straightforward.

**When might a retry mechanism be more effective than an immediate failure response?**

A retry mechanism is especially useful when dealing with transient or temporary failures that are likely to resolve themselves given a short delay. For example, network timeouts, brief connectivity losses, or temporary server overloads can often be resolved by simply trying the request again after a short interval. In such cases, immediately failing the request would result in a poor user experience and unnecessary frustration. Retry mechanisms can also be helpful when dealing with APIs that impose rate limits, allowing the application to wait and retry after the limit resets. However, retries are not effective for permanent errors such as logic bugs or invalid data formats; these require developer attention rather than automated recovery. By implementing a retry strategy selectively, applications can become more robust and responsive in real-world usage scenarios.
