Elm.Elm2048 = Elm.Elm2048 || {};
Elm.Elm2048.make = function (_elm) {
   "use strict";
   _elm.Elm2048 = _elm.Elm2048 || {};
   if (_elm.Elm2048.values)
   return _elm.Elm2048.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Elm2048";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var GameModel = Elm.GameModel.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var InputModel = Elm.InputModel.make(_elm);
   var List = Elm.List.make(_elm);
   var Logic = Elm.Logic.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Rendering = Elm.Rendering.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Window = Elm.Window.make(_elm);
   var _op = {};
   var newGameButton = Native.Ports.portIn("newGameButton",
   Native.Ports.incomingSignal(function (v) {
      return typeof v === "boolean" ? v : _E.raise("invalid input, expecting JSBoolean but got " + v);
   }));
   var input = Signal.sampleOn(InputModel.delta)(A2(Signal._op["~"],
   A2(Signal._op["~"],
   A2(Signal._op["~"],
   A2(Signal._op["<~"],
   InputModel.Input,
   InputModel.delta),
   InputModel.userInput),
   InputModel.randomFloats(InputModel.delta)),
   newGameButton));
   var gameState = A3(Signal.foldp,
   Logic.stepGame,
   GameModel.defaultGame,
   input);
   var main = A2(Signal._op["~"],
   A2(Signal._op["<~"],
   Rendering.display,
   Window.dimensions),
   gameState);
   var score = Native.Ports.portOut("score",
   Native.Ports.outgoingSignal(function (v) {
      return v;
   }),
   A2(Signal._op["<~"],
   function (x) {
      return x.score;
   },
   gameState));
   _elm.Elm2048.values = {_op: _op
                         ,input: input
                         ,gameState: gameState
                         ,main: main};
   return _elm.Elm2048.values;
};Elm.Rendering = Elm.Rendering || {};
Elm.Rendering.make = function (_elm) {
   "use strict";
   _elm.Rendering = _elm.Rendering || {};
   if (_elm.Rendering.values)
   return _elm.Rendering.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Rendering";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var GameModel = Elm.GameModel.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var tileTextSize = function (tile) {
      return function () {
         switch (tile.ctor)
         {case "Number": switch (tile._0)
              {case 128: return 45;
                 case 256: return 45;
                 case 512: return 45;
                 case 1024: return 35;
                 case 2048: return 35;}
              break;}
         return 55;
      }();
   };
   var tileTextColor = function (tile) {
      return function () {
         switch (tile.ctor)
         {case "Number":
            return _U.cmp(tile._0,
              8) > -1 ? A3(Color.rgb,
              249,
              246,
              242) : A3(Color.rgb,
              119,
              110,
              101);}
         return Color.black;
      }();
   };
   var tileTextStyle = function (tile) {
      return {_: {}
             ,bold: true
             ,color: tileTextColor(tile)
             ,height: Maybe.Just(tileTextSize(tile))
             ,italic: false
             ,line: Maybe.Nothing
             ,typeface: _L.fromArray(["Clear Sans"
                                     ,"Helvetica Neue"
                                     ,"Arial"
                                     ,"sans-serif"])};
   };
   var tileColor = function (tile) {
      return function () {
         switch (tile.ctor)
         {case "Number": switch (tile._0)
              {case 2: return A3(Color.rgb,
                   238,
                   228,
                   218);
                 case 4: return A3(Color.rgb,
                   237,
                   224,
                   200);
                 case 8: return A3(Color.rgb,
                   242,
                   177,
                   121);
                 case 16: return A3(Color.rgb,
                   245,
                   149,
                   99);
                 case 32: return A3(Color.rgb,
                   246,
                   124,
                   95);
                 case 64: return A3(Color.rgb,
                   246,
                   94,
                   59);
                 case 128: return A3(Color.rgb,
                   237,
                   207,
                   114);
                 case 256: return A3(Color.rgb,
                   237,
                   204,
                   97);
                 case 512: return A3(Color.rgb,
                   237,
                   200,
                   80);
                 case 1024: return A3(Color.rgb,
                   237,
                   197,
                   63);
                 case 2048: return A3(Color.rgb,
                   237,
                   194,
                   46);}
              break;}
         return A4(Color.rgba,
         238,
         228,
         218,
         0.35);
      }();
   };
   var tileMargin = 15;
   var tileSize = 106.25;
   var gridWidth = 4 * tileSize + 5 * tileMargin;
   var displayGameOverOverlay = A3(Graphics.Collage.collage,
   Basics.round(gridWidth),
   Basics.round(gridWidth),
   _L.fromArray([Graphics.Collage.filled(A4(Color.rgba,
                238,
                228,
                218,
                0.73))(Graphics.Collage.square(gridWidth))
                ,Graphics.Collage.toForm(Text.centered(Text.style(tileTextStyle(GameModel.Number(2)))(Text.toText("Game over!"))))]));
   var displayWonOverlay = A3(Graphics.Collage.collage,
   Basics.round(gridWidth),
   Basics.round(gridWidth),
   _L.fromArray([Graphics.Collage.filled(A4(Color.rgba,
                237,
                194,
                46,
                0.5))(Graphics.Collage.square(gridWidth))
                ,Graphics.Collage.toForm(Text.centered(Text.style(tileTextStyle(GameModel.Number(16)))(Text.toText("You win!"))))]));
   var displayTile = function (tile) {
      return function () {
         switch (tile.ctor)
         {case "Empty":
            return A3(Graphics.Collage.collage,
              Basics.round(tileSize),
              Basics.round(tileSize),
              _L.fromArray([Graphics.Collage.filled(tileColor(GameModel.Empty))(Graphics.Collage.square(tileSize))]));
            case "Number":
            return A3(Graphics.Collage.collage,
              Basics.round(tileSize),
              Basics.round(tileSize),
              _L.fromArray([Graphics.Collage.filled(tileColor(tile))(Graphics.Collage.square(tileSize))
                           ,Graphics.Collage.toForm(Text.centered(Text.style(tileTextStyle(tile))(Text.toText(String.show(tile._0)))))]));}
         _E.Case($moduleName,
         "between lines 72 and 79");
      }();
   };
   var displayGrid = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "Grid":
            return function () {
                 var tiles = List.map(function (_v15) {
                    return function () {
                       switch (_v15.ctor)
                       {case "_Tuple3":
                          return Graphics.Collage.move({ctor: "_Tuple2"
                                                       ,_0: (tileSize + tileMargin) * (_v15._1 - 1.5)
                                                       ,_1: (tileSize + tileMargin) * (_v15._2 - 1.5)})(Graphics.Collage.toForm(displayTile(_v15._0)));}
                       _E.Case($moduleName,
                       "on line 84, column 46 to 143");
                    }();
                 })(List.concat(A2(List.zipWith,
                 F2(function (j,r) {
                    return A2(List.map,
                    function (_v11) {
                       return function () {
                          switch (_v11.ctor)
                          {case "_Tuple2":
                             return {ctor: "_Tuple3"
                                    ,_0: _v11._0
                                    ,_1: _v11._1
                                    ,_2: j};}
                          _E.Case($moduleName,
                          "on line 86, column 61 to 66");
                       }();
                    },
                    r);
                 }),
                 _L.range(0,
                 3))(List.map(function (r) {
                    return A2(List.zip,
                    r,
                    _L.range(0,3));
                 })(_v8._0))));
                 var gridBox = Graphics.Collage.filled(A3(Color.rgb,
                 187,
                 173,
                 160))(Graphics.Collage.square(gridWidth));
                 return A3(Graphics.Collage.collage,
                 Basics.round(gridWidth),
                 Basics.round(gridWidth),
                 _L.append(_L.fromArray([gridBox]),
                 tiles));
              }();}
         _E.Case($moduleName,
         "between lines 82 and 89");
      }();
   };
   var display = F2(function (_v20,
   gameState) {
      return function () {
         switch (_v20.ctor)
         {case "_Tuple2":
            return _U.eq(gameState.gameProgress,
              GameModel.GameOver) ? A3(Graphics.Collage.collage,
              Basics.round(gridWidth),
              Basics.round(gridWidth),
              _L.fromArray([Graphics.Collage.toForm(displayGrid(gameState.grid))
                           ,Graphics.Collage.toForm(displayGameOverOverlay)])) : _U.eq(gameState.gameProgress,
              GameModel.Won) ? A3(Graphics.Collage.collage,
              Basics.round(gridWidth),
              Basics.round(gridWidth),
              _L.fromArray([Graphics.Collage.toForm(displayGrid(gameState.grid))
                           ,Graphics.Collage.toForm(displayWonOverlay)])) : displayGrid(gameState.grid);}
         _E.Case($moduleName,
         "between lines 106 and 108");
      }();
   });
   _elm.Rendering.values = {_op: _op
                           ,tileSize: tileSize
                           ,tileMargin: tileMargin
                           ,gridWidth: gridWidth
                           ,tileColor: tileColor
                           ,tileTextColor: tileTextColor
                           ,tileTextSize: tileTextSize
                           ,tileTextStyle: tileTextStyle
                           ,displayTile: displayTile
                           ,displayGrid: displayGrid
                           ,displayGameOverOverlay: displayGameOverOverlay
                           ,displayWonOverlay: displayWonOverlay
                           ,display: display};
   return _elm.Rendering.values;
};Elm.Logic = Elm.Logic || {};
Elm.Logic.make = function (_elm) {
   "use strict";
   _elm.Logic = _elm.Logic || {};
   if (_elm.Logic.values)
   return _elm.Logic.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Logic";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var GameModel = Elm.GameModel.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var InputModel = Elm.InputModel.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Random = Elm.Random.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Utils = Elm.Utils.make(_elm);
   var _op = {};
   var gameWon = function (_v0) {
      return function () {
         switch (_v0.ctor)
         {case "Grid": return !_U.eq(0,
              List.length(List.filter(function (t) {
                 return _U.eq(t,
                 GameModel.Number(2048));
              })(List.concat(_v0._0))));}
         _E.Case($moduleName,
         "on line 148, column 20 to 79");
      }();
   };
   var noTilePushDirection = function (gameState) {
      return _U.replace([["tilePush"
                         ,InputModel.None]],
      gameState);
   };
   var win = function (gameState) {
      return _U.replace([["gameProgress"
                         ,GameModel.Won]],
      gameState);
   };
   var gameOver = function (gameState) {
      return _U.replace([["gameProgress"
                         ,GameModel.GameOver]],
      gameState);
   };
   var inProgressGameState = function (gameState) {
      return _U.replace([["gameProgress"
                         ,GameModel.InProgress]],
      gameState);
   };
   var tile2Probability = 0.9;
   var newTile = function (x) {
      return _U.cmp(x,
      tile2Probability) < 0 ? GameModel.Number(2) : GameModel.Number(4);
   };
   var slideRow = function (r) {
      return function () {
         var groupedInts = Utils.groupedByTwo(A2(List.map,
         GameModel.tileToInt,
         r));
         return {ctor: "_Tuple2"
                ,_0: List.map(GameModel.intToTile)(List.take(4)(_L.append(A2(List.map,
                List.sum,
                groupedInts),
                _L.fromArray([0,0,0,0]))))
                ,_1: List.sum(List.concat(A2(List.filter,
                function (x) {
                   return _U.cmp(List.length(x),
                   1) > 0;
                },
                groupedInts)))};
      }();
   };
   var slideGrid = F2(function (dir,
   _v3) {
      return function () {
         switch (_v3.ctor)
         {case "Grid":
            return function () {
                 var h = function () {
                    switch (dir.ctor)
                    {case "Down":
                       return function (x) {
                            return A2(List.zip,
                            Utils.transpose(A2(List.map,
                            Basics.fst,
                            x)),
                            A2(List.map,Basics.snd,x));
                         }(List.map(slideRow)(Utils.transpose(_v3._0)));
                       case "Left": return A2(List.map,
                         slideRow,
                         _v3._0);
                       case "Right":
                       return List.map(function (_v7) {
                            return function () {
                               switch (_v7.ctor)
                               {case "_Tuple2":
                                  return {ctor: "_Tuple2"
                                         ,_0: List.reverse(_v7._0)
                                         ,_1: _v7._1};}
                               _E.Case($moduleName,
                               "on line 74, column 54 to 65");
                            }();
                         })(List.map(slideRow)(A2(List.map,
                         List.reverse,
                         _v3._0)));
                       case "Up": return function (x) {
                            return A2(List.zip,
                            Utils.transpose(A2(List.map,
                            Basics.fst,
                            x)),
                            A2(List.map,Basics.snd,x));
                         }(List.map(function (_v11) {
                            return function () {
                               switch (_v11.ctor)
                               {case "_Tuple2":
                                  return {ctor: "_Tuple2"
                                         ,_0: List.reverse(_v11._0)
                                         ,_1: _v11._1};}
                               _E.Case($moduleName,
                               "on line 81, column 56 to 67");
                            }();
                         })(List.map(slideRow)(List.map(List.reverse)(Utils.transpose(_v3._0)))));}
                    return A2(List.zip,
                    _v3._0,
                    _L.fromArray([0,0,0,0]));
                 }();
                 return {ctor: "_Tuple2"
                        ,_0: GameModel.Grid(A2(List.map,
                        Basics.fst,
                        h))
                        ,_1: List.sum(A2(List.map,
                        Basics.snd,
                        h))};
              }();}
         _E.Case($moduleName,
         "between lines 72 and 86");
      }();
   });
   var gridFull = function (g) {
      return function () {
         var right = Basics.fst(A2(slideGrid,
         InputModel.Right,
         g));
         var left = Basics.fst(A2(slideGrid,
         InputModel.Left,
         g));
         var down = Basics.fst(A2(slideGrid,
         InputModel.Down,
         g));
         var up = Basics.fst(A2(slideGrid,
         InputModel.Up,
         g));
         return List.and(_L.fromArray([_U.eq(up,
                                      down)
                                      ,_U.eq(down,left)
                                      ,_U.eq(left,right)]));
      }();
   };
   var pushTiles = F2(function (input,
   gameState) {
      return function () {
         var newGridScore = A2(slideGrid,
         input.userInput.tilePushDirection,
         gameState.grid);
         return _U.eq(Basics.fst(newGridScore),
         gameState.grid) ? gameState : _U.replace([["tilePush"
                                                   ,input.userInput.tilePushDirection]
                                                  ,["tilesToPlace"
                                                   ,gameState.tilesToPlace + 1]
                                                  ,["grid"
                                                   ,Basics.fst(newGridScore)]
                                                  ,["score"
                                                   ,gameState.score + Basics.snd(newGridScore)]],
         gameState);
      }();
   });
   var emptyTiles = function (_v15) {
      return function () {
         switch (_v15.ctor)
         {case "Grid":
            return List.map(function (_v27) {
                 return function () {
                    switch (_v27.ctor)
                    {case "_Tuple3":
                       return {ctor: "_Tuple2"
                              ,_0: _v27._1
                              ,_1: _v27._2};}
                    _E.Case($moduleName,
                    "on line 53, column 41 to 44");
                 }();
              })(List.filter(function (_v22) {
                 return function () {
                    switch (_v22.ctor)
                    {case "_Tuple3":
                       return _U.eq(_v22._0,
                         GameModel.Empty);}
                    _E.Case($moduleName,
                    "on line 54, column 43 to 53");
                 }();
              })(List.concat(A2(List.zipWith,
              F2(function (j,r) {
                 return A2(List.map,
                 function (_v18) {
                    return function () {
                       switch (_v18.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple3"
                                 ,_0: _v18._0
                                 ,_1: _v18._1
                                 ,_2: j};}
                       _E.Case($moduleName,
                       "on line 56, column 56 to 61");
                    }();
                 },
                 r);
              }),
              _L.range(0,
              3))(List.map(function (r) {
                 return A2(List.zip,
                 r,
                 _L.range(0,3));
              })(_v15._0)))));}
         _E.Case($moduleName,
         "between lines 53 and 58");
      }();
   };
   var newTileIndex = F2(function (x,
   g) {
      return function () {
         var emptyTileIndices = emptyTiles(g);
         return function () {
            switch (emptyTileIndices.ctor)
            {case "[]":
               return Maybe.Nothing;}
            return Maybe.Just(List.head(A2(List.drop,
            Basics.floor(Basics.toFloat(List.length(emptyTileIndices)) * x),
            emptyTileIndices)));
         }();
      }();
   });
   var placeRandomTile = F2(function (input,
   gameState) {
      return _U.replace([["nextTile"
                         ,newTile(List.head(input.randomFloats))]
                        ,["grid"
                         ,A3(GameModel.setTile,
                         A2(Maybe.maybe,
                         {ctor: "_Tuple2",_0: 0,_1: 0},
                         Basics.id)(A2(newTileIndex,
                         List.last(input.randomFloats),
                         gameState.grid)),
                         gameState.grid,
                         gameState.nextTile)]
                        ,["tilesToPlace"
                         ,gameState.tilesToPlace - 1]],
      gameState);
   });
   var stepGame = F2(function (input,
   gameState) {
      return input.newGameButtonPressed ? GameModel.defaultGame : _U.eq(gameState.gameProgress,
      GameModel.GameOver) ? gameState : _U.eq(gameState.gameProgress,
      GameModel.Won) ? gameState : gameWon(gameState.grid) ? win(gameState) : List.and(_L.fromArray([gridFull(gameState.grid)
                                                                                                    ,_U.eq(gameState.gameProgress,
                                                                                                    GameModel.InProgress)])) ? gameOver(gameState) : _U.cmp(gameState.tilesToPlace,
      0) > 0 ? A2(placeRandomTile,
      input,
      gameState) : _U.eq(gameState.gameProgress,
      GameModel.Beginning) ? inProgressGameState(gameState) : _U.eq(input.userInput.tilePushDirection,
      gameState.tilePush) ? gameState : _U.eq(input.userInput.tilePushDirection,
      InputModel.None) ? noTilePushDirection(gameState) : !_U.eq(input.userInput.tilePushDirection,
      InputModel.None) ? A2(pushTiles,
      input,
      gameState) : gameState;
   });
   _elm.Logic.values = {_op: _op
                       ,emptyTiles: emptyTiles
                       ,slideRow: slideRow
                       ,slideGrid: slideGrid
                       ,gridFull: gridFull
                       ,tile2Probability: tile2Probability
                       ,newTile: newTile
                       ,newTileIndex: newTileIndex
                       ,inProgressGameState: inProgressGameState
                       ,gameOver: gameOver
                       ,win: win
                       ,placeRandomTile: placeRandomTile
                       ,noTilePushDirection: noTilePushDirection
                       ,pushTiles: pushTiles
                       ,gameWon: gameWon
                       ,stepGame: stepGame};
   return _elm.Logic.values;
};Elm.GameModel = Elm.GameModel || {};
Elm.GameModel.make = function (_elm) {
   "use strict";
   _elm.GameModel = _elm.GameModel || {};
   if (_elm.GameModel.values)
   return _elm.GameModel.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "GameModel";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var InputModel = Elm.InputModel.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var GameState = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,gameProgress: f
             ,grid: a
             ,nextTile: c
             ,score: e
             ,tilePush: b
             ,tilesToPlace: d};
   });
   var Won = {ctor: "Won"};
   var GameOver = {ctor: "GameOver"};
   var InProgress = {ctor: "InProgress"};
   var Beginning = {ctor: "Beginning"};
   var Grid = function (a) {
      return {ctor: "Grid",_0: a};
   };
   var readTile = F2(function (_v0,
   _v1) {
      return function () {
         switch (_v1.ctor)
         {case "Grid":
            return function () {
                 switch (_v0.ctor)
                 {case "_Tuple2":
                    return List.head(List.drop(_v0._0)(List.head(List.drop(_v0._1)(_v1._0))));}
                 _E.Case($moduleName,
                 "between lines 58 and 60");
              }();}
         _E.Case($moduleName,
         "between lines 58 and 60");
      }();
   });
   var setTile = F3(function (_v7,
   _v8,
   t) {
      return function () {
         switch (_v8.ctor)
         {case "Grid":
            return function () {
                 switch (_v7.ctor)
                 {case "_Tuple2":
                    return function () {
                         var r = List.head(List.drop(_v7._1)(_v8._0));
                         var nr = _L.append(A2(List.take,
                         _v7._0,
                         r),
                         _L.append(_L.fromArray([t]),
                         A2(List.drop,_v7._0 + 1,r)));
                         return Grid(_L.append(A2(List.take,
                         _v7._1,
                         _v8._0),
                         _L.append(_L.fromArray([nr]),
                         A2(List.drop,
                         _v7._1 + 1,
                         _v8._0))));
                      }();}
                 _E.Case($moduleName,
                 "between lines 63 and 66");
              }();}
         _E.Case($moduleName,
         "between lines 63 and 66");
      }();
   });
   var Empty = {ctor: "Empty"};
   var emptyGrid = Grid(List.repeat(4)(List.repeat(4)(Empty)));
   var defaultGame = {_: {}
                     ,gameProgress: Beginning
                     ,grid: emptyGrid
                     ,nextTile: Empty
                     ,score: 0
                     ,tilePush: InputModel.None
                     ,tilesToPlace: 3};
   var Number = function (a) {
      return {ctor: "Number"
             ,_0: a};
   };
   var tileToInt = function (t) {
      return function () {
         switch (t.ctor)
         {case "Number": return t._0;}
         return 0;
      }();
   };
   var intToTile = function (n) {
      return function () {
         switch (n)
         {case 0: return Empty;}
         return Number(n);
      }();
   };
   _elm.GameModel.values = {_op: _op
                           ,emptyGrid: emptyGrid
                           ,readTile: readTile
                           ,setTile: setTile
                           ,tileToInt: tileToInt
                           ,intToTile: intToTile
                           ,defaultGame: defaultGame
                           ,Number: Number
                           ,Empty: Empty
                           ,Grid: Grid
                           ,Beginning: Beginning
                           ,InProgress: InProgress
                           ,GameOver: GameOver
                           ,Won: Won
                           ,GameState: GameState};
   return _elm.GameModel.values;
};Elm.InputModel = Elm.InputModel || {};
Elm.InputModel.make = function (_elm) {
   "use strict";
   _elm.InputModel = _elm.InputModel || {};
   if (_elm.InputModel.values)
   return _elm.InputModel.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "InputModel";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Keyboard = Elm.Keyboard.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Random = Elm.Random.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var delta = Time.fps(30);
   var randomFloats = function (s) {
      return Random.floatList(Signal.sampleOn(delta)(Signal.constant(2)));
   };
   var UserInput = function (a) {
      return {_: {}
             ,tilePushDirection: a};
   };
   var None = {ctor: "None"};
   var Right = {ctor: "Right"};
   var Left = {ctor: "Left"};
   var Down = {ctor: "Down"};
   var Up = {ctor: "Up"};
   var arrowsDirection = function () {
      var toDirection = F2(function (ds,
      wasds) {
         return _U.eq(ds,
         {_: {}
         ,x: 0
         ,y: 1}) ? Up : _U.eq(ds,
         {_: {}
         ,x: 0
         ,y: -1}) ? Down : _U.eq(ds,
         {_: {}
         ,x: 1
         ,y: 0}) ? Right : _U.eq(ds,
         {_: {}
         ,x: -1
         ,y: 0}) ? Left : _U.eq(wasds,
         {_: {}
         ,x: 0
         ,y: 1}) ? Up : _U.eq(wasds,
         {_: {}
         ,x: 0
         ,y: -1}) ? Down : _U.eq(wasds,
         {_: {}
         ,x: 1
         ,y: 0}) ? Right : _U.eq(wasds,
         {_: {}
         ,x: -1
         ,y: 0}) ? Left : None;
      });
      return A2(Signal._op["~"],
      A2(Signal._op["<~"],
      toDirection,
      Keyboard.arrows),
      Keyboard.wasd);
   }();
   var userInput = A2(Signal._op["<~"],
   UserInput,
   Signal.dropRepeats(arrowsDirection));
   var Input = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,newGameButtonPressed: d
             ,randomFloats: c
             ,timeDelta: a
             ,userInput: b};
   });
   _elm.InputModel.values = {_op: _op
                            ,arrowsDirection: arrowsDirection
                            ,delta: delta
                            ,userInput: userInput
                            ,randomFloats: randomFloats
                            ,Up: Up
                            ,Down: Down
                            ,Left: Left
                            ,Right: Right
                            ,None: None
                            ,Input: Input
                            ,UserInput: UserInput};
   return _elm.InputModel.values;
};Elm.Utils = Elm.Utils || {};
Elm.Utils.make = function (_elm) {
   "use strict";
   _elm.Utils = _elm.Utils || {};
   if (_elm.Utils.values)
   return _elm.Utils.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Utils";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var transpose = function (ll) {
      return function () {
         switch (ll.ctor)
         {case "::": switch (ll._0.ctor)
              {case "::": return {ctor: "::"
                                 ,_0: {ctor: "::"
                                      ,_0: ll._0._0
                                      ,_1: A2(List.map,
                                      List.head,
                                      ll._1)}
                                 ,_1: transpose({ctor: "::"
                                                ,_0: ll._0._1
                                                ,_1: A2(List.map,
                                                List.tail,
                                                ll._1)})};
                 case "[]":
                 return transpose(ll._1);}
              break;
            case "[]":
            return _L.fromArray([]);}
         _E.Case($moduleName,
         "between lines 31 and 34");
      }();
   };
   var groupedByTwo = function (l) {
      return groupedByTwo$(A2(List.filter,
      function (x) {
         return !_U.eq(x,0);
      },
      l));
   };
   var groupedByTwo$ = function (l) {
      return function () {
         switch (l.ctor)
         {case "::": switch (l._1.ctor)
              {case "::":
                 switch (l._1._1.ctor)
                   {case "[]": return _U.eq(l._0,
                        l._1._0) ? _L.fromArray([_L.fromArray([l._0
                                                              ,l._1._0])]) : _L.fromArray([_L.fromArray([l._0])
                                                                                          ,_L.fromArray([l._1._0])]);}
                   return _U.eq(l._0,
                   l._1._0) ? {ctor: "::"
                              ,_0: _L.fromArray([l._0
                                                ,l._1._0])
                              ,_1: groupedByTwo(l._1._1)} : {ctor: "::"
                                                            ,_0: _L.fromArray([l._0])
                                                            ,_1: groupedByTwo({ctor: "::"
                                                                              ,_0: l._1._0
                                                                              ,_1: l._1._1})};
                 case "[]":
                 return _L.fromArray([_L.fromArray([l._0])]);}
              break;
            case "[]":
            return _L.fromArray([]);}
         return _L.fromArray([]);
      }();
   };
   _elm.Utils.values = {_op: _op
                       ,groupedByTwo: groupedByTwo
                       ,groupedByTwo$: groupedByTwo$
                       ,transpose: transpose};
   return _elm.Utils.values;
};