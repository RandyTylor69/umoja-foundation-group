# Use an official PHP-FPM image
FROM php:8.4-fpm

# Install system dependencies (needed for MySQL and Laravel)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy existing application directory
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

# 1. Give the script execution permissions
RUN chmod +x /var/www/scripts/00-laravel-deploy.sh

# 2. Set the Entrypoint
# This tells Docker: "Always run this script first"
ENTRYPOINT ["/var/www/scripts/00-laravel-deploy.sh"]


# Expose port 80 and start php-fpm
EXPOSE 80
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]