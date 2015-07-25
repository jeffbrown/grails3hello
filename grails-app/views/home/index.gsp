<html ng-app="sampleApp">

<head>
    <script type="text/javascript" src="/js/jquery.js" ></script>
    <script type="text/javascript" src="/js/angular.js" ></script>
    <script type="text/javascript" src="/js/angular-resource.js" ></script>
    <script type="text/javascript" src="/js/main.js" ></script>
</head>

<body>

<div ng-controller="sampleController">


<input type="text" name="username" ng-model="userData.username"/>
<input type="password" name="password" ng-model="userData.password"/>
<input type="submit" name="saveUserError" value="Will Fail" ng-click="saveUser()"/>
    <input type="submit" name="saveUserWorking" value="Will Pass" ng-click="saveUserWorking()"/>
</div>


</body>

</html>