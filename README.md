# Micro Masher

This project is based on [microfrontends.org](https://github.com/neuland/micro-frontends) this is a proof of concept of a service that will provide the gaps that microfrontends leaves.
The gaps left by microfrontends are navigation, service discovery and a configuration.

## How does it work

The idea is to put a generic service in front of the micro frontends that will fill these gaps like so
<img src="http://yuml.me/diagram/scruffy;dir:TB/usecase/(Micro%20Masher),%20(Micro%20Masher)-(Team%20red),%20(Micro%20Masher)-(Team%20blue),%20(Micro%20Masher)-(Team%20green)" alt="diagram">

This "Micro Masher" service will be [configurable](config.yml) to be able to add pages that consist of multiple services and combine then.
That way it will be able to create navigation.
Each service has a javascript that gets imported and that exposes an `init` function that takes a element as a parameter.

