
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

[EventHandler("onenterpressed", typeof(KeyboardEventArgs), 
    enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}