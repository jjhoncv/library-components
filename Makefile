.DEFAULT_GOAL := help

DOCKER_IMAGE   = node:9.11.1-slim
AWS_REGION     = us-east-1
AWS_SRC_INPUT  = .out/
AWS_SRC_OUTPUT = s3://library.components/

install: ## Install dependencies: make install
	make docker NODE_COMMAND="npm install"

build: ## Build: make build
	make docker NODE_COMMAND="npm run building:deploy"

sync-cds:
	aws s3 rm $(AWS_SRC_OUTPUT) --recursive
	aws s3 sync --acl public-read --cache-control max-age=3600,public $(AWS_SRC_INPUT) $(AWS_SRC_OUTPUT) --region $(AWS_REGION)

test: ## Test storybook: make test
	make docker DOCKER_ENVIRONMENTS="-e HOME=./ -e JEST_JUNIT_OUTPUT=$(JEST_JUNIT_OUTPUT)" NODE_COMMAND="npm run test --ci --reporters=default --reporters=jest-junit"

docker:
	docker run $(INTERACTIVE) -t --rm $(DOCKER_ENVIRONMENTS) -v $(PWD):/app/ -w /app $(DOCKER_IMAGE) $(NODE_COMMAND)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
