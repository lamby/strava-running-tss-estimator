Strava: Running Training Stress Score (TSS) estimator
"""""""""""""""""""""""""""""""""""""""""""""""""""""

A Chrome extension to estimate the Training Stress Score (TSS) from a Strava
run's grade adjusted pace distribution.

Background
==========

In cycling, the Training Stress Score is a function of ride's duration, average
power and the intensity of the ride relative to the rider's capability. To find
out more about how intensity and TSS is calculated on a bike, please read:

  http://www.slowtwitch.com/Training/General_Physiology/Measuring_Power_and_Using_the_Data_302.html

Having equivalent TSS values for other sports (ie. a 50 TSS on the bike counts
the same as a 50 TSS run) allows an athelete to compare the physiological
"cost" of activities in different sports.

This can be used to simply determine the length and intensity of the athletes next
workout (to ensure adequate recovery), or to identify the athlete's long-term
tolerance to total training load.

(These features are available in TrainingPeaks or WKO+. Strava's "Suffer Score"
is only available when using a heart rate monitor.)

Installation
============

 * Clone (or otherwise download) the contents of this repository.

 * In Chrome, go to "Tools > Extensions".

 * Ensure "Developer mode" is ticked.

 * Click "Load unpacked extension" and select the directory you have stored
   this code.

 * Refresh a "Pace Distribution" page on Strava; the estimated Training Stress
   Score will be displayed next to the calories and elevation stats.
