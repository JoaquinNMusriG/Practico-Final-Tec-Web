from django.db import models

# Create your models here.
class Fact(models.Model):

    title = models.CharField(max_length=50)
    description = models.TextField()
    generation = models.CharField(blank=True, max_length=1)

    def __str__(self):
        return self.title