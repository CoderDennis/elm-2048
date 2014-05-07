{--
2048-elm

Utils.elm

Copyright (c) 2014 Josh Kirklin

This source is subject to the MIT License.
Please see the LICENSE file for more information.
All other rights reserved.
--}

{------------------------------------------------------------------------------

                            Utility Functions

------------------------------------------------------------------------------}

module Utils where

transpose : [[a]] -> [[a]] -- transposes a list of lists
transpose ll = case ll of
    ([] :: xss) -> transpose xss
    ((x::xs)::xss) -> (x :: (map head xss)) :: transpose (xs :: (map tail xss))
    otherwise -> []
