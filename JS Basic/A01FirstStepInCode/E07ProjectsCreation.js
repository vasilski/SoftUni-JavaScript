function e07ProjectsCreation(input) {
    let name = input[0];
    let project = Number(input[1]);

    let hours = project * 3

    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`)
}
e07ProjectsCreation(["George ", "4 "]
)