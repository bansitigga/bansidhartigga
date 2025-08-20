FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json next.config.js tailwind.config.js ./
RUN npm install
COPY app ./app
RUN npm run build
CMD ["npm", "start"]
