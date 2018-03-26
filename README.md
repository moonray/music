# Music Project

## Backend
### Setup
    cd backend
    composer install
    cp .env.example .env
    
Now edit .env with appropriate values for your environment.

    php artisan migrate:install
    php artisan db:seed

### Running it
    php -S localhost:8000 -t public
    
## Frontend
### Setup
    cd frontend
    yarn install

### Running it
    yarn start
