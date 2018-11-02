/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OAuth2Client', 'model/OpenIDConnectContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OAuth2Client'), require('./OpenIDConnectContext'));
  } else {
    // Browser globals (root is window)
    if (!root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer) {
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer = {};
    }
    root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.LoginRequest = factory(root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.ApiClient, root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.OAuth2Client, root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.OpenIDConnectContext);
  }
}(this, function(ApiClient, OAuth2Client, OpenIDConnectContext) {
  'use strict';




  /**
   * The LoginRequest model module.
   * @module model/LoginRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>LoginRequest</code>.
   * @alias module:model/LoginRequest
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginRequest} obj Optional instance to populate.
   * @return {module:model/LoginRequest} The populated <code>LoginRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('challenge')) {
        obj['challenge'] = ApiClient.convertToType(data['challenge'], 'String');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = OAuth2Client.constructFromObject(data['client']);
      }
      if (data.hasOwnProperty('oidc_context')) {
        obj['oidc_context'] = OpenIDConnectContext.constructFromObject(data['oidc_context']);
      }
      if (data.hasOwnProperty('request_url')) {
        obj['request_url'] = ApiClient.convertToType(data['request_url'], 'String');
      }
      if (data.hasOwnProperty('requested_access_token_audience')) {
        obj['requested_access_token_audience'] = ApiClient.convertToType(data['requested_access_token_audience'], ['String']);
      }
      if (data.hasOwnProperty('requested_scope')) {
        obj['requested_scope'] = ApiClient.convertToType(data['requested_scope'], ['String']);
      }
      if (data.hasOwnProperty('session_id')) {
        obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'Boolean');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
    }
    return obj;
  }

  /**
   * Challenge is the identifier (\"authentication challenge\") of the consent authentication request. It is used to identify the session.
   * @member {String} challenge
   */
  exports.prototype['challenge'] = undefined;
  /**
   * @member {module:model/OAuth2Client} client
   */
  exports.prototype['client'] = undefined;
  /**
   * @member {module:model/OpenIDConnectContext} oidc_context
   */
  exports.prototype['oidc_context'] = undefined;
  /**
   * RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.
   * @member {String} request_url
   */
  exports.prototype['request_url'] = undefined;
  /**
   * RequestedScope contains the access token audience as requested by the OAuth 2.0 Client.
   * @member {Array.<String>} requested_access_token_audience
   */
  exports.prototype['requested_access_token_audience'] = undefined;
  /**
   * RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.
   * @member {Array.<String>} requested_scope
   */
  exports.prototype['requested_scope'] = undefined;
  /**
   * SessionID is the authentication session ID. It is set if the browser had a valid authentication session at ORY Hydra during the login flow. It can be used to associate consecutive login requests by a certain user.
   * @member {String} session_id
   */
  exports.prototype['session_id'] = undefined;
  /**
   * Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.  This feature allows you to update / set session information.
   * @member {Boolean} skip
   */
  exports.prototype['skip'] = undefined;
  /**
   * Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type when accepting the login request, or the request will fail.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;



  return exports;
}));


