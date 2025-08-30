import {createLogger, format, transports} from 'winston';
// importing Winston (a logging library).
//- createLogger :used to make a logger instance
//-format:lets us style how logs look(color,JSON,timeStamp etc)
//-transp[ort:defines wheree logs will be saved(console,file,etc.)

const { combine, timestamp, printf } = format;
//Extracting helpers from 'format'
//-combine : lets us merge multiple formats
//-timestamp :adds date/time to logs
//printf: customize log output(like a template) 

//custom format for console logging with colors 
const consoleLogFormat = format.combine(
    format.colorize(), //Adds colors to logs levels(info = blue,error=red,etc.)
    format.printf(({level,message,timestamp}) => {
        return `${level}:${message}` //Custom display:only shows level and message 
    })
)

//Create a Winston logger 
const logger = createLogger({
    level:'info', //minimun level to log (info,warn,errro,debug etc.)
    format: combine(
        format.colorize(), //Add colors
        timestamp(), //Add date/time
        format.json(),      //Store logs in JSOn Structure(useful for files/monitoring)
        ),
        transports:[
            //output logs to console
            new transports.Console({
                format: consoleLogFormat //Use custom console format defined earlier
            }),
            //Also save logs ino fiel named "app.log"
            new transports.File({filename:'app.log'})
        ]
})

export default logger;
// Export logger so it can be implemented and used in other files