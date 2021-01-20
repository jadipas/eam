#!/bin/sh
if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."
    echo $DB_HOST
    echo $DB_PORT
    while ! nc -z $DB_HOST $DB_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py collectstatic --noinput
python manage.py migrate --noinput

echo "from django.contrib.auth import get_user_model;
User = get_user_model();
User.objects.filter(username='$DJANGO_ADMIN_USERNAME').delete();
User.objects.create_superuser(username='$DJANGO_ADMIN_USERNAME',first_name='$DJANGO_ADMIN_FIRST_NAME', last_name='$DJANGO_ADMIN_LAST_NAME',email='$DJANGO_ADMIN_EMAIL',phone='$DJANGO_ADMIN_PHONE',amka='$DJANGO_ADMIN_AMKA',afm='$DJANGO_ADMIN_AFM', company='$DJANGO_ADMIN_COMPANY', password='$DJANGO_ADMIN_PASSWORD')" | python manage.py shell

exec "$@"