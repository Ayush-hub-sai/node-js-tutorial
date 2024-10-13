console.log("starting up");

setTimeout(() => {
    console.log("2 second log");
}, 2000);

setTimeout(() => {
    console.log("0 second log");
}, 0);

console.log("finishing up");

/**
 * starting up
 * finishing up
 * 0 second log
 * 2 second log
 * 
 * 
 * 
 * call stack                                    node api                call back
 * main                                             set time out1
 *  main                                            set time out2
 *  main                                                                    set time out2(based upon on their response time)
 * set time out2(based upon on their response time)                         set time out1
 * set time out1
 * 
 */


