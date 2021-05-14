sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var BlockBlue = BlockBase.extend("com.cv.cv.blocks.BlockBlue", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "com.cv.cv.blocks.BlockBlue",
						type: "XML"
					},
					Expanded: {
						viewName: "com.cv.cv.blocks.BlockBlue",
						type: "XML"
					}
				}
			},
			renderer: {}
		});

		return BlockBlue;

	});