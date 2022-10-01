network:
	docker network create moomoo-services

stop:
	docker compose down

start:
	docker compose up -d --build
