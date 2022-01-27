# Stage 1: based on Node.js.
FROM node:16.3.0-alpine3.11 as development
# Force sourcemap. Default value: true.
ARG GENERATE_SOURCEMAP=true
ARG PKGS_PATH=./packages
ARG PKG1_PATH=${PKGS_PATH}/package-1
ARG PKG2_PATH=${PKGS_PATH}/package-2
ARG FRONTEND_PATH=./src/frontend

# Add a work directory.
WORKDIR /app

# Copy package.json
COPY ./package.json ./yarn.lock ./lerna.json ./
COPY ${PKG1_PATH}/package.json packages/package-1/
COPY ${PKG2_PATH}/package.json packages/package-2/
COPY ${FRONTEND_PATH}/package.json src/frontend/
# Install packages
RUN yarn

# Copy files
COPY ${PKG1_PATH} packages/package-1/
COPY ${PKG2_PATH} packages/package-2/
COPY ${FRONTEND_PATH} src/frontend/
# Install all dependency from all packages
RUN yarn bootstrap

# #
# # Run the application in a development mode.
# FROM bootstrap as development
# WORKDIR /app
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]