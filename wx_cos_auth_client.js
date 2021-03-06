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
var wx_cos_auth_proto = grpc.load(PROTO_PATH).wx_cos_auth;

function main() {
    var client = new wx_cos_auth_proto.WXCosAuth('localhost:50051',
        grpc.credentials.createInsecure());
    client.getAuthData({method: "POST", pathname: "/"}, function (err, response) {
        console.log('wx_cos_auth:', response.auth_data);
    });
}

main();
