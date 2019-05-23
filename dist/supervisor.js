/*!
 * NPM Supervisor v0.2.4
 * https://github.com/muuvmuuv/npm-supervisor
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 23.05.2019
 */
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var s=e(require("listr")),t=e(require("path")),r=e(require("chalk")),n=e(require("execa")),i=e(require("read-pkg")),o=e(require("semver")),a=function(){return(a=Object.assign||function(e){for(var s,t=1,r=arguments.length;t<r;t++)for(var n in s=arguments[t])Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);return e}).apply(this,arguments)};function u(e,s,t,r){return new(t||(t=Promise))(function(n,i){function o(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?n(e.value):new t(function(s){s(e.value)}).then(o,a)}u((r=r.apply(e,s||[])).next())})}function c(e,s){var t,r,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=s.call(e,o)}catch(e){i=[6,e],r=0}finally{t=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function l(e){return new Promise(function(s){return setTimeout(s,e)})}var h=function(){function e(e){this.results={},this.pillow=50;var t={debug:!1,cwd:process.cwd(),ignoreLocal:!0,silent:!0};this.options=a({},t,e),this.tasks=new s({renderer:this.options.debug?"verbose":this.options.silent?"silent":"default",concurrent:!1,exitOnError:!1}),this.options.ignoreLocal&&this.ignoreLocal(),this.options.engines||this.findEngines(),this.buildTasks()}return e.prototype.run=function(){return u(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:if(!this.tasks)throw new Error("No tasks found!");return[4,this.tasks.run()];case 1:return e.sent(),[2,this.results]}})})},e.prototype.ignoreLocal=function(){var e=process.env.PATH;if(e){var s=t.resolve(this.options.cwd,"node_modules",".bin"),r=new RegExp(":?"+s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+":?","i"),n=e.replace(r,":");process.env.PATH=n}},e.prototype.buildTasks=function(){var e=this,s=this.options.engines;if(!s)throw new Error("No engines found!");Object.keys(s).forEach(function(t){var r=s[t];e.addTask(t,r)})},e.prototype.addTask=function(e,t){var n=this;this.results[e]={success:!1,tasks:[]},this.tasks.add({title:"Checking engine: "+r.green(e)+" ("+r.dim(t)+")",task:function(){return new s([{title:"Check availability",task:function(s,t){return n.checkAvailability(s,t,e)}},{title:"Get command version",task:function(s,t){return n.getVersion(s,t,e)}},{title:"Validate range",task:function(s,r){return n.validateVersion(s,r,e,t)}},{title:"Check version against range",task:function(s,r){return n.checkVersion(s,r,e,t)}},{title:r.dim("Update results"),task:function(){return n.results[e].success=!0,Promise.resolve()}}],{exitOnError:!0})}})},e.prototype.findEngines=function(){var e=i.sync({cwd:this.options.cwd});if(!e)throw new Error("No package.json found!");this.options.engines=e.engines},e.prototype.checkAvailability=function(e,s,t){return u(this,void 0,void 0,function(){var e,r;return c(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,n("command",["-v",t],{preferLocal:!1})];case 1:return e=i.sent().stdout,[4,l(this.pillow)];case 2:return i.sent(),this.options.debug&&console.log("Command:",e),e.includes(t)?(this.results[t].tasks.push({task:s,success:!0,message:"Executable found!",data:e}),[2,Promise.resolve("Executable found!")]):(this.results[t].tasks.push({task:s,success:!1,message:"Executable not found!",data:e}),[2,Promise.reject(new Error("Executable not found!"))]);case 3:return r=i.sent(),this.options.debug&&console.log(r.message),this.results[t].tasks.push({task:s,success:!1,message:"Error executing program!",data:r}),[2,Promise.reject(new Error("Error executing program!"))];case 4:return[2]}})})},e.prototype.getVersion=function(e,s,t){return u(this,void 0,void 0,function(){var r,i,a,u;return c(this,function(c){switch(c.label){case 0:return c.trys.push([0,3,,4]),[4,n(t,["--version"],{preferLocal:!1})];case 1:return r=c.sent().stdout,[4,l(this.pillow)];case 2:return c.sent(),i=o.coerce(r),this.options.debug&&(console.log("Version:",r),console.log("Normalized:",i?i.version:null)),i&&(a=o.valid(i.version))?(e.version=a,this.results[t].tasks.push({task:s,success:!0,message:"Got a valid version",data:{version:r,normalized:i,validVersion:a}}),[2,Promise.resolve()]):(this.results[t].tasks.push({task:s,success:!1,message:"No valid version found! Please fill in an issue on GitHub.",data:{stdout:r,normalized:i}}),[2,Promise.reject(new Error("No valid version found! Please fill in an issue on GitHub."))]);case 3:return u=c.sent(),this.options.debug&&console.log(u.message),this.results[t].tasks.push({task:s,success:!1,message:"Error fetching version!",data:u}),[2,Promise.reject(new Error("Error fetching version!"))];case 4:return[2]}})})},e.prototype.validateVersion=function(e,s,t,r){return u(this,void 0,void 0,function(){var e;return c(this,function(n){switch(n.label){case 0:return[4,o.validRange(r)];case 1:return e=n.sent(),[4,l(this.pillow)];case 2:return n.sent(),this.options.debug&&(console.log("Range:",r),console.log("Valid:",e)),e?(this.results[t].tasks.push({task:s,success:!0,message:"This version is valid!",data:{range:r}}),[2,Promise.resolve("This version is valid!")]):(this.results[t].tasks.push({task:s,success:!1,message:"This is not a valid version ("+r+")!",data:{range:r}}),[2,Promise.reject(new Error("This is not a valid version ("+r+")!"))])}})})},e.prototype.checkVersion=function(e,s,t,r){var n=e.version;return u(this,void 0,void 0,function(){var e;return c(this,function(i){switch(i.label){case 0:return[4,o.satisfies(n,r)];case 1:return e=i.sent(),[4,l(this.pillow)];case 2:return i.sent(),this.options.debug&&(console.log("Version:",n),console.log("Range:",r),console.log("Satisfies:",e)),e?(this.results[t].tasks.push({task:s,success:!0,message:"Yeah, your program version satisfies the required range!",data:{version:n,range:r,satisfies:e}}),[2,Promise.resolve("Yeah, your program version satisfies the required range!")]):(this.results[t].tasks.push({task:s,success:!1,message:"Ooh, the required range ("+r+") does not satisfies your program version ("+n+")!",data:{version:n,range:r,satisfies:e}}),[2,Promise.reject(new Error("Ooh, the required range ("+r+") does not satisfies your program version ("+n+")!"))])}})})},e}();module.exports=h;