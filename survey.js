// rl.question(query[, options], callback)
// query {string} A statement or query to write to output, prepended to the prompt.
// options {Object}
// signal {AbortSignal} Optionally allows the question() to be canceled using an AbortController.
// callback {Function} A callback function that is invoked with the user's input in response to the query.
// The rl.question() method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.

// When called, rl.question() will resume the input stream if it has been paused.

// If the readline.Interface was created with output set to null or undefined the query is not written.

// The callback function passed to rl.question() does not follow the typical pattern of accepting an Error object or null as the first argument. The callback is called with the provided answer as the only argument.

// An error will be thrown if calling rl.question() after rl.close().

// rl.close()
// The rl.close() method closes the InterfaceConstructor instance and relinquishes control over the input and output streams. When called, the 'close' event will be emitted.

// Calling rl.close() does not immediately stop other events (including 'line') from being emitted by the InterfaceConstructor instance.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generator = [];

// What's your name? 
rl.question('What is your nickname? ', (answer) => {
  generator.push(`Thank you for your valuable feedback: ${answer}`);

  //What's an activity you like doing?
  rl.question('What is an activity you like doing? ', (answer) => {
    generator.push(`Thank you for your valuable feedback: ${answer}`);

    // What do you listen to while doing that? 
    rl.question('What do you listen to while doing that? ', (answer) => {
      generator.push(`Thank you for your valuable feedback: ${answer}`);

      //Which meal is your favourite? Breakfast, lunch or dinner.
      rl.question('Which meal is your favourite? Breakfast, lunch or dinner. ', (answer) => {
        generator.push(`Thank you for your valuable feedback: ${answer}`);

        //What's your favourite thing to eat for that meal?
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          generator.push(`Thank you for your valuable feedback: ${answer}`);

          //Which sport is your absolute favourite?
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            generator.push(`Thank you for your valuable feedback: ${answer}`);

            //What is your superpower?
            rl.question('What is your superpower? ', (answer) => {
              generator.push(`Thank you for your valuable feedback: ${answer}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});