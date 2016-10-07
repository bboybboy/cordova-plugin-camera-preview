#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVInvokedUrlCommand.h>

#import "LLCameraSessionManager.h"
#import "LLCameraRenderController.h"

@interface LLCameraPreview : CDVPlugin <TakePictureDelegate>

- (void) startCamera:(CDVInvokedUrlCommand*)command;
- (void) stopCamera:(CDVInvokedUrlCommand*)command;
- (void) showCamera:(CDVInvokedUrlCommand*)command;
- (void) hideCamera:(CDVInvokedUrlCommand*)command;
- (void) setFlashMode:(CDVInvokedUrlCommand*)command;
- (void) switchCamera:(CDVInvokedUrlCommand*)command;
- (void) takePicture:(CDVInvokedUrlCommand*)command;
- (void) setOnPictureTakenHandler:(CDVInvokedUrlCommand*)command;

- (void) invokeTakePicture:(CGFloat) orientation withWidth:(CGFloat) maxWidth withHeight:(CGFloat) maxHeight;
- (void) invokeTakePicture;

@property (nonatomic) LLCameraSessionManager *sessionManager;
@property (nonatomic) LLCameraRenderController *cameraRenderController;
@property (nonatomic) NSString *onPictureTakenHandlerId;

@end
