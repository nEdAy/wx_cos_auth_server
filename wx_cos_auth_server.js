/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var PROTO_PATH = __dirname + '/wx_cos_auth.proto';

var grpc = require('grpc');
var sts_auth = require('./sts-auth');
var wx_cos_auth_proto = grpc.load(PROTO_PATH).wx_cos_auth;

/**
 * Implements the SayHello RPC method.
 */
function getAuthData(call, callback) {
    callback(null, {auth_data: sts_auth(call.request.method, call.request.pathname)});
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(wx_cos_auth_proto.WXCosAuth.service, {getAuthData: getAuthData});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
