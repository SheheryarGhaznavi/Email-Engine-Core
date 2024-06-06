# Email Client Core System

## Overview

This project demonstrates a core system for an email client that integrates with Outlook. It includes a backend for handling OAuth and email synchronization, and a simple frontend to display email data.

## Setup

### Prerequisites
- Docker
- Docker Compose

### Running the Project

1. Clone the repository:
    ```sh
    git clone https://github.com/SheheryarGhaznavi/Email-Engine-Core.git
    cd Email-Engine-Core
    ```

2. Create `.env` file in the `backend` directory with your Outlook app credentials:
    ```sh
    cd backend
    touch .env
    ```

    Add the following content to `.env`:
    ```
    OUTLOOK_CLIENT_ID=your-outlook-client-id
    OUTLOOK_CLIENT_SECRET=your-outlook-client-secret
    OUTLOOK_REDIRECT_URI=http://localhost:3001/api/accounts/callback
    ELASTICSEARCH_URL=http://elasticsearch:9200
    ```

3. Start the application using Docker Compose:
    ```sh
    docker-compose up --build
    ```

4. Open your browser and go to `http://localhost:3000` to add your Outlook account and synchronize emails.

## Architecture

- **Backend**: Node.js, Express, Elasticsearch
- **Frontend**: React
- **Database**: Elasticsearch

## Endpoints

- **POST `/api/accounts/create`**: Start the OAuth flow to link Outlook account.
- **GET `/api/accounts/callback`**: Handle the OAuth callback from Outlook.
- **POST `/api/sync`**: Synchronize emails from Outlook.

## Frontend

- **Add Account Page**: Link your Outlook account.
- **Data Page**: Display synchronized emails.

## Docker

The application is fully Dockerized and can be run using Docker Compose.

## License

This project is licensed under the MIT License.
