#!/bin/bash

echo "Setting up EdTech Backend..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if MySQL is running
if ! pgrep -x "mysqld" > /dev/null
then
    echo "MySQL is not running. Please start MySQL service first."
    exit 1
fi

# Create database and tables
echo "Creating database and tables..."
mysql -u root -p < database/schema.sql

echo "Setup complete! Run 'npm run dev' to start the server."