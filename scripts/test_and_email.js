// usage: steal\js -mail funcunit\scripts\test_and_email.js

load('funcunit/test/settings.js')
load('steal/email/email.js');

if (java.lang.System.getProperty("os.name").indexOf("Windows") != -1) {
	runCommand("cmd", "/C", "start /b steal\\js funcunit/scripts/funcunit.js > funcunit/test.log")
	runCommand("cmd", "/C", "start /b steal\\js funcunit/scripts/qunit.js >> funcunit/test.log")
}
else {
	runCommand("sh", "-c", "nohup ./steal/js funcunit/scripts/funcunit.js > funcunit/test.log")
	runCommand("sh", "-c", "nohup ./steal/js funcunit/scripts/qunit.js >> funcunit/test.log")
}

var log = readFile('funcunit/test.log');
Emailer.setup(EmailerDefaults);
Emailer.send(log)