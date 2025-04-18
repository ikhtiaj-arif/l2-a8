# Project Name: Bike Service L2-A8

## Project Summary

The Bike Servicing Management API is a backend system designed to help bike servicing centers manage customer, bike, and service data. The API enables the creation, retrieval, updating, and deletion of customer records, bike information, and service records. It also allows for the tracking of service statuses, including marking services as completed, and fetching overdue or pending services. Built with **Node.js**, **Express.js**, and **TypeScript**, the API uses **Prisma ORM** to interact with a **PostgreSQL** database, with UUIDs used as primary keys for data scalability. This system is ideal for bike servicing centers looking to efficiently manage their operations and ensure a seamless experience for customers.


## Live Backend Link

[Live backend link (e.g., Railway, Render)](https://l2-a8.vercel.app/)

## Tech Stack

- **Backend Framework**: Express.js
- **Database ORM**: Prisma
- **TypeScript** for type safety
- **Zod** for data validation
- **Node.js** for server-side JavaScript execution
- **CORS** for cross-origin requests handling

## Setup Guide

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ikhtiaj-arif/l2-a8.git

## Key Features

- **Customer Management**: Perform CRUD operations (Create, Read, Update, Delete) for customer records, including managing customer details like name, email, and phone.
- **Bike Management**: CRUD operations for bikes, allowing you to associate bikes with customers and manage bike information such as brand, model, and year.
- **Service Record Management**: Create, fetch, and update service records for bikes, including the ability to mark services as completed and manage service status.
- **Pending and Overdue Services**: Fetch services that are either pending or overdue (older than 7 days) based on their status.
- **Error Handling**: Standardized error response structure for consistent error reporting and debugging.
- **UUID-based Database Schema**: All tables use UUIDs as primary keys to ensure unique and scalable data management across the system.
