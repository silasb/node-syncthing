"use strict";
const NS = require('./');
const test = require('tape');
const tapSpec = require('tap-spec');
test.createStream().pipe(tapSpec()).pipe(process.stdout);
const example = {
  hostname: "localhost",
  port: 8384,
  apiKey: "19A5pMYGNr0SOqzL9xoyJp7JuRbwzZq2",
  folder: "default",
  subdir: "sub",
  file: "test.txt",
  device: "KRQBQWV-KMPEWLV-LBQC5PE-I345CWF-JRQHAAZ-UFSBZY6-A57BO2R-SHLKDA6",
  eventListener: true
}
const st = new NS(example);
st.on("stateChanged", function (data) {
})
test("Callback", function (t) {
  t.plan(2);
  st.system.ping(function (err, res) {
    t.equal(null, err, "No Errors");
    t.equal(res.ping, "pong");
  });
});
test("Promises", function (t) {
  t.plan(1);
  st.system.ping().then(function (res) {
    t.equal(res.ping, "pong");
  }).catch(function (err) {
    t.equal(err, null, "No Errors");
  })
});
test("System/Version", function (t) {
  t.plan(2);
  st.system.version(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("System/Status", function (t) {
  t.plan(2);
  st.system.status(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("System/Connections", function (t) {
  t.plan(2);
  st.system.connections(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("System/Config", function (t) {
  t.plan(3);
  st.system.getConfig(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
    st.system.setConfig(res, function (err, res) {
      t.equal(err, null, "No Errors");
    });
  });
});
test("System/Debug", function (t) {
  t.plan(2);
  st.system.debug(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("System/Get Discovery", function (t) {
  t.plan(2);
  st.system.getDiscovery(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("System/Errors", function (t) {
  t.plan(2);
  st.system.errors(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
// test("Clear Errors", function (t) {
//   t.plan(2);
//   st.system.clearErrors(function (err) {
//     t.equal(err, null, "No Errors");
//   });
// });
test("System/Logs", function (t) {
  t.plan(2);
  st.system.logs(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("DB/Scan", function (t) {
  t.plan(2);
  st.db.scan(example.folder, function (err) {
    t.equal(err, null, "No Errors");
  });
  st.db.scan(example.folder, example.subdir, function (err) {
    t.equal(err, null, "No Errors");
  });
});
test("DB/Status", function (t) {
  t.plan(2);
  st.db.status(example.folder, function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("DB/Browse", function (t) {
  t.plan(2);
  st.db.browse(example.folder, 1, example.subdir, function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("DB/File", function (t) {
  t.plan(2);
  st.db.file(example.folder, example.file, function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("DB/Get Ignores", function (t) {
  t.plan(2);
  st.db.getIgnores(example.folder, function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("Stats/Devices", function (t) {
  t.plan(2);
  st.stats.devices(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("Stats/Folders", function (t) {
  t.plan(2);
  st.stats.folders(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("Misc/Device ID", function (t) {
  t.plan(2);
  st.misc.deviceId(example.device, function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});
test("Misc/Lang", function (t) {
  t.plan(2);
  st.misc.lang(function (err, res) {
    t.equal(err, null, "No Errors");
    t.equal(typeof res, "object", "Json response");
  });
});

test("System/Restart", function (t) {
  t.plan(1);
  st.system.restart(function (err) {
    t.equal(err, null, "No Errors");
  });
});
