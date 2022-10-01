# Local development
FROM node:18-alpine AS development
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn
USER node

# Build for production
FROM node:18-alpine AS build
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
USER node

# Production
FROM node:18-alpine As production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
CMD ["node", "dist/main.js"]
