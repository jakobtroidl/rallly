## Key difference to when2meet

Instead of showing long continuous phases of available times like when2meet, this doodle alternative shows discrete chunks of meeting slots, that a user can select from. Thats the key difference between when2meet and doodle.

## Setup instructions for Priyan

You will need to build a docker image to run my version of the Doodle app. Please make sure docker is installed and the demon is running. Note, that there are docker issues on M1 chips. Works like a charm on intel CPUs on MacOS though.

```bash
git clone https://github.com/jakobtroidl/rallly.git
cd rallly
docker-compose up -d
```

access <http://localhost:3000/>

## Comments

Due to the large scope of this software, I focused my comments only on the Demo code of the project.

* You can find the commented file [here](https://github.com/jakobtroidl/rallly/blob/main/src/components/home/poll-demo.tsx)
* You can find a prepopulated Demo poll under this link after you built the app <http://localhost:3000/admin/ZU5CjZTC9DOL>

## Source & Background

This code is largely based on an open-source implementation of doodle that can be found [here](https://github.com/lukevella/rallly)

For more information about the software see `README_original.md`

The demo off the app should look like this
https://github.com/jakobtroidl/rallly/blob/main/demo.png