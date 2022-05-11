# Inversion of Control (IoC)
In software engineering, inversion of control (IoC) is a programming principle. IoC inverts the flow of control as compared to traditional control flow. In IoC, custom-written portions of a computer program receive the flow of control from a generic framework. A software architecture with this design inverts control as compared to traditional procedural programming: in traditional programming, the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.

How it works:
We use `@Injectable` to add service to Providers Store
With `@Inject` we retrieve back the stored instance. 

## Install dependencies
```
npm i
```

## Build project
```
npm run build
```

## Run tests

To run the tests
```
npm run test
```